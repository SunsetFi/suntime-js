import { type Node, type Function, isFunction, Expression } from "@babel/types";

import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";

import { EvaluationContext } from "../../../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import { StaticJsName } from "../../../../evaluator/StaticJsName.js";

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
import { StaticJsPrivateEnvironmentRecord } from "../../../environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import { StaticJsFunctionEnvironmentRecord } from "../../../environments/implementation/StaticJsFunctionEnvironmentRecord.js";

import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import toObject from "../../../algorithms/to-object.js";
import { ordinaryCreateFromConstructor } from "../../../algorithms/ordinary-create-from-constructor.js";
import definePropertyOrThrow from "../../../algorithms/define-property-or-throw.js";

import { isStaticJsValue, type StaticJsValue } from "../../StaticJsValue.js";
import { isStaticJsNull } from "../../StaticJsNull.js";
import { isStaticJsUndefined } from "../../StaticJsUndefined.js";
import { isStaticJsObjectLike, StaticJsObjectLike } from "../../StaticJsObjectLike.js";
import { StaticJsCallable } from "../../StaticJsCallable.js";

import type { StaticJsAstFunctionArgument } from "./StaticJsAstFunctionArgument.js";
import type { StaticJsFunctionFactory } from "./StaticJsFunctionFactory.js";
import { StaticJsAbstractFunction } from "./StaticJsAbstractFunction.js";

export interface StaticJsAstFunctionOptions {
  thisMode: "lexical-this" | "non-lexical-this";
  strict: boolean;
  env: StaticJsEnvironmentRecord;
  prototype?: StaticJsObjectLike | null;
  privateEnv?: StaticJsPrivateEnvironmentRecord | null;
  scriptOrModule: StaticJsScriptOrModuleRecord;
  construct?: boolean;
}
export abstract class StaticJsAstFunction extends StaticJsAbstractFunction {
  private _strict: boolean;
  private _scriptOrModule: StaticJsScriptOrModuleRecord;

  private _constructorKind: null | "base" | "derived" = null;
  private _environment: StaticJsEnvironmentRecord;
  private _privateEnv: StaticJsPrivateEnvironmentRecord | null;
  private _thisMode: "lexical" | "strict" | "global";

  constructor(
    realm: StaticJsRealm,
    name: StaticJsName | null,
    private readonly _argumentDeclarations: StaticJsAstFunctionArgument[],
    protected readonly _node: Function | Expression,
    {
      thisMode,
      strict,
      env,
      privateEnv,
      scriptOrModule,
      construct,
      prototype,
    }: StaticJsAstFunctionOptions,
    // Gross circular dependency workaround.
    protected readonly _createFunction: StaticJsFunctionFactory,
  ) {
    super(
      realm,
      name,
      getArgumentsLength(_argumentDeclarations),
      prototype !== undefined ? prototype : realm.types.prototypes.functionProto,
    );

    if (strict) {
      this._strict = true;
    } else if (
      isFunction(_node) &&
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
    this._privateEnv = privateEnv ?? null;

    // Another shim from old pre-spec era
    if (construct) {
      this.realm.invokeEvaluatorSync(this.makeConstructor());
    }
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
    return this._constructorKind !== null;
  }

  get constructorKind(): null | "base" | "derived" {
    return this._constructorKind;
  }

  set constructorKind(value: "base" | "derived") {
    if (this._constructorKind === null) {
      throw new StaticJsEngineError("Cannot set constructorKind before calling makeConstructor");
    }
    if (value === null) {
      throw new StaticJsEngineError("constructorKind cannot be set to null");
    }

    this._constructorKind = value;
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

  *constructEvaluator(
    args: StaticJsValue[] = [],
    newTarget: StaticJsCallable = this,
  ): EvaluationGenerator<StaticJsObjectLike> {
    if (this._constructorKind === null) {
      // FIXME: Better error message.  What does NodeJs say?
      throw Completion.Throw("TypeError", "This function is not a constructor.");
    }

    // FIXME: this should be newTarget!
    const thisArg = yield* ordinaryCreateFromConstructor(this, "objectProto");

    const calleeContext = yield* this._prepareForOrdinaryCall(newTarget);

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

  *makeConstructor(writablePrototype?: boolean, prototype?: StaticJsObjectLike) {
    if (this._constructorKind !== null) {
      throw new StaticJsEngineError("Function is already a constructor");
    }

    // MakeConstructor 10.2.5.1
    // When is MakeConstructor called when F is NOT a function object?
    // Says use 10.3.2 for that case, but 10.3.2 says input F IS a function object!
    // Anyway, 10.2.5.1 is done in our construct method.

    this._constructorKind = "base";
    if (!writablePrototype) {
      writablePrototype = true;
    }
    if (!prototype) {
      prototype = this.realm.types.object();
      yield* definePropertyOrThrow(prototype, "constructor", {
        value: this,
        writable: writablePrototype,
        enumerable: false,
        configurable: false,
      });
    }

    yield* definePropertyOrThrow(this, "prototype", {
      value: prototype,
      writable: writablePrototype,
      enumerable: false,
      configurable: false,
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
      if (isFunction(_node)) {
        yield* Q(EvaluateNodeCommand(_node.body));
        return Completion.Return(realm.types.undefined);
      } else {
        throw new StaticJsEngineError(
          "Function body node is not a Function node.  _evaluateBody should be overridden.",
        );
      }
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
      this._privateEnv ?? undefined,
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
