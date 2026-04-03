import { type Node, type Function } from "@babel/types";

import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";

import { EvaluationContext } from "../../../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";

import functionDeclarationInstantiation from "../../../../evaluator/instantiation/function-declaration-instantiation.js";
import type { StaticJsScriptOrModuleRecord } from "../../../../evaluator/ScriptOrModuleRecord/StaticJsScriptOrModuleRecod.js";

import { EvaluateNodeCommand } from "../../../../evaluator/commands/EvaluateNodeCommand.js";
import { FunctionEvaluateBodyCommand } from "../../../../evaluator/commands/FunctionEvaluateCommand.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";
import { captureThrownCompletion } from "../../../../evaluator/completions/capture-thrown-completion.js";
import { Q } from "../../../../evaluator/completions/Q.js";
import { ReturnCompletion } from "../../../../evaluator/completions/completion-types/ReturnCompletion.js";
import { ThrowCompletion } from "../../../../evaluator/completions/completion-types/ThrowCompletion.js";

import type { StaticJsEnvironmentRecord } from "../../../environments/StaticJsEnvironmentRecord.js";
import { StaticJsFunctionEnvironmentRecord } from "../../../environments/implementation/StaticJsFunctionEnvironmentRecord.js";

import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import toObject from "../../../algorithms/to-object.js";

import { Prototypes } from "../../../intrinsics/intrinsics.js";

import { isStaticJsValue, type StaticJsValue } from "../../StaticJsValue.js";
import { isStaticJsNull } from "../../StaticJsNull.js";
import { isStaticJsUndefined } from "../../StaticJsUndefined.js";
import { isStaticJsObjectLike, StaticJsObjectLike } from "../../StaticJsObjectLike.js";

import type { StaticJsAstFunctionArgument } from "./StaticJsAstFunctionArgument.js";
import type { StaticJsFunctionFactory } from "./StaticJsFunctionFactory.js";
import { StaticJsAbstractFunction } from "./StaticJsAbstractFunction.js";
import { get } from "../../../algorithms/get.js";

export interface StaticJsAstFunctionOptions {
  thisMode: "lexical-this" | "non-lexical-this";
  strict: boolean;
  env: StaticJsEnvironmentRecord;
  scriptOrModule: StaticJsScriptOrModuleRecord;
  construct?: boolean;
}
export abstract class StaticJsAstFunction extends StaticJsAbstractFunction {
  private _strict: boolean;
  private _scriptOrModule: StaticJsScriptOrModuleRecord;

  private _isConstructor: boolean;
  private _environment: StaticJsEnvironmentRecord;
  private _thisMode: "lexical" | "strict" | "global";

  constructor(
    realm: StaticJsRealm,
    name: string | null,
    private readonly _argumentDeclarations: StaticJsAstFunctionArgument[],
    protected readonly _node: Function,
    { thisMode, strict, env, scriptOrModule, construct }: StaticJsAstFunctionOptions,
    // Gross circular dependency workaround.
    protected readonly _createFunction: StaticJsFunctionFactory,
  ) {
    super(
      realm,
      name,
      getArgumentsLength(_argumentDeclarations),
      realm.types.prototypes.functionProto,
    );

    if (strict) {
      this._strict = true;
    } else if (
      _node.body.type === "BlockStatement" &&
      _node.body.directives.some(({ value }) => value.value === "use strict")
    ) {
      this._strict = true;
    } else {
      this._strict = false;
    }

    if (thisMode === "lexical-this") {
      this._thisMode = "lexical";
    } else if (this._strict) {
      this._thisMode = "strict";
    } else {
      this._thisMode = "global";
    }

    this._scriptOrModule = scriptOrModule;
    this._environment = env;
    this._isConstructor = construct ?? true;
  }

  override get ecmaScriptCode(): Node {
    return this._node;
  }

  override get scriptOrModule(): StaticJsScriptOrModuleRecord | null {
    return this._scriptOrModule;
  }

  override get strict(): boolean {
    return this._strict;
  }

  override get isConstructor(): boolean {
    return this._isConstructor;
  }

  get thisMode(): "lexical" | "strict" | "global" {
    return this._thisMode;
  }

  get environment(): StaticJsEnvironmentRecord {
    return this._environment;
  }

  get formalParameters(): StaticJsAstFunctionArgument[] {
    return this._argumentDeclarations;
  }

  *callEvaluator(
    thisArg: StaticJsValue,
    args: StaticJsValue[] = [],
  ): EvaluationGenerator<StaticJsValue> {
    if (!isStaticJsValue(thisArg)) {
      throw new TypeError("thisArg must be a StaticJsValue instance.");
    }

    if (args.some((arg) => !isStaticJsValue(arg))) {
      throw new TypeError("Arguments must be StaticJsValue instances.");
    }

    const calleeContext = yield* this._prepareForOrdinaryCall(null);

    // oxlint-disable-next-line typescript/no-this-alias
    const func = this;
    return yield* FunctionEvaluateBodyCommand(this, function* () {
      // TODO: If class constructor, throw TypeError.
      yield* func._ordinaryCallBindThis(calleeContext, thisArg);

      const result = yield* captureThrownCompletion(func._evaluateBody(args));
      EvaluationContext.pop();

      if (Completion.Throw.is(result)) {
        throw result;
      }

      if (Completion.Return.is(result)) {
        return result.value;
      }

      // For convienence, we support returning normal completions
      // as being equivalent to a return completion.
      if (isStaticJsValue(result)) {
        return result;
      } else {
        return func.realm.types.undefined;
      }
    });
  }

  *constructEvaluator(args: StaticJsValue[] = []): EvaluationGenerator<StaticJsObjectLike> {
    if (!this._isConstructor) {
      throw Completion.Throw("TypeError", "This function is not a constructor.");
    }

    // Note: Only do if base, for whenever we implement classes.
    const thisArg = yield* this._ordinaryCreateFromConstructor("objectProto");

    const calleeContext = yield* this._prepareForOrdinaryCall(this);

    // oxlint-disable-next-line typescript/no-this-alias
    const func = this;
    return yield* FunctionEvaluateBodyCommand(func, function* () {
      yield* func._ordinaryCallBindThis(calleeContext, thisArg);

      // TODO classes: initialize instance elements

      // Would be used for derived constructors.
      // const constructorEnv = context.lexicalEnv;

      let result = yield* captureThrownCompletion(func._evaluateBody!(args));
      EvaluationContext.pop();

      if (Completion.Throw.is(result)) {
        throw result;
      }

      // HACK: Supporting internal caller shorthand
      if (isStaticJsValue(result)) {
        result = Completion.Return(result);
      }

      // Apparently typescript is upset about Completion.Return.assert?
      if (!Completion.Return.is(result)) {
        throw new StaticJsEngineError("Constructor did not return a value or threw an exception.");
      }

      const value = result.value;
      if (isStaticJsObjectLike(value)) {
        return value;
      }

      // For kind: BASE
      return thisArg;

      // TODO: For derived, we need to return constructorEnv.getThisBinding()
    });
  }
  protected *_evaluateBody(
    args: StaticJsValue[],
  ): EvaluationGenerator<ReturnCompletion | ThrowCompletion> {
    const { realm, _node } = this;

    yield* functionDeclarationInstantiation(
      this,
      args,
      // Gross circular dependency workaround.
      this._createFunction,
    );

    try {
      yield* Q(EvaluateNodeCommand(_node.body));
      return Completion.Return(realm.types.undefined);
    } catch (e) {
      if (Completion.Return.is(e)) {
        return e;
      } else {
        throw e;
      }
    }
  }

  protected *_ordinaryCallBindThis(
    calleeContext: EvaluationContext,
    thisArgument: StaticJsValue,
  ): EvaluationGenerator<void> {
    const thisMode = this._thisMode;
    if (thisMode === "lexical") {
      return;
    }

    let thisValue: StaticJsValue;

    const localEnv = calleeContext.lexicalEnv;
    if (thisMode === "strict") {
      thisValue = thisArgument;
    } else {
      if (isStaticJsUndefined(thisArgument) || isStaticJsNull(thisArgument)) {
        thisValue = this.realm.globalThis;
      } else {
        thisValue = yield* toObject(thisArgument);
      }
    }

    if (localEnv instanceof StaticJsFunctionEnvironmentRecord === false) {
      throw new StaticJsEngineError(
        "Expected function environment record in ordinaryCallBindThis.",
      );
    }

    localEnv.initializeThis(thisValue);
  }

  protected *_prepareForOrdinaryCall(
    newTarget: StaticJsObjectLike | null,
  ): EvaluationGenerator<EvaluationContext> {
    const env = yield* this._newFunctionEnvironment(newTarget);
    const context = EvaluationContext.createFunctionInvocationContext(
      this,
      this.scriptOrModule,
      this.realm,
      env,
    );

    EvaluationContext.push(context);
    return context;
  }

  protected *_newFunctionEnvironment(
    newTarget: StaticJsObjectLike | null,
  ): EvaluationGenerator<StaticJsFunctionEnvironmentRecord> {
    const env = new StaticJsFunctionEnvironmentRecord(
      this,
      newTarget,
      this._thisMode === "lexical",
      this._environment,
      this.realm,
    );
    return env;
  }

  private *_ordinaryCreateFromConstructor(
    intrinsicDefaultProto: keyof Prototypes,
  ): EvaluationGenerator<StaticJsObjectLike> {
    const proto = yield* this._getPrototypeFromConstructor(intrinsicDefaultProto);
    return this.realm.types.object(undefined, proto);
  }

  private *_getPrototypeFromConstructor(
    intrinsicDefaultProto: keyof Prototypes,
  ): EvaluationGenerator<StaticJsObjectLike> {
    let proto: StaticJsObjectLike;
    const protoValue = yield* Q(get(this, "prototype"));
    if (!isStaticJsObjectLike(protoValue)) {
      proto = this.realm.types.prototypes[intrinsicDefaultProto];
    } else {
      proto = protoValue;
    }

    return proto;
  }
}

function getArgumentsLength(args: StaticJsAstFunctionArgument[]): number {
  let length = 0;
  for (const arg of args) {
    if (arg.type === "RestElement" || arg.type === "AssignmentPattern") {
      break;
    }
    length++;
  }

  return length;
}
