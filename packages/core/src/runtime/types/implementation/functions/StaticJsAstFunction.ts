import { type Node, type BlockStatement, type Expression } from "@babel/types";

import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";

import { EvaluationContext } from "../../../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";

import functionDeclarationInstantiation from "../../../../evaluator/instantiation/function-declaration-instantiation.js";
import type { StaticJsScriptOrModuleRecord } from "../../../../evaluator/ScriptOrModuleRecord/StaticJsScriptOrModuleRecod.js";

import { EvaluateNodeCommand } from "../../../../evaluator/commands/EvaluateNodeCommand.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";
import { captureThrownCompletion } from "../../../../evaluator/completions/capture-thrown-completion.js";
import { Q } from "../../../../evaluator/completions/Q.js";
import { ReturnCompletion } from "../../../../evaluator/completions/completion-types/ReturnCompletion.js";
import { ThrowCompletion } from "../../../../evaluator/completions/completion-types/ThrowCompletion.js";

import type { StaticJsEnvironmentRecord } from "../../../environments/StaticJsEnvironmentRecord.js";
import { StaticJsFunctionEnvironmentRecord } from "../../../environments/implementation/StaticJsFunctionEnvironmentRecord.js";

import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import toObject from "../../../algorithms/to-object.js";

import type { StaticJsValue } from "../../StaticJsValue.js";
import { isStaticJsNull } from "../../StaticJsNull.js";
import { isStaticJsUndefined, StaticJsUndefined } from "../../StaticJsUndefined.js";
import { StaticJsObjectLike } from "../../StaticJsObjectLike.js";

import { StaticJsFunctionImpl, type StaticJsFunctionImplOptions } from "./StaticJsFunctionImpl.js";

import type { StaticJsAstFunctionArgument } from "./StaticJsAstFunctionArgument.js";
import type { StaticJsFunctionFactory } from "./StaticJsFunctionFactory.js";

export interface StaticJsAstFunctionOptions extends StaticJsFunctionImplOptions {
  thisMode: "lexical-this" | "non-lexical-this";
  strict: boolean;
  env: StaticJsEnvironmentRecord;
  scriptOrModule: StaticJsScriptOrModuleRecord;
}
export abstract class StaticJsAstFunction extends StaticJsFunctionImpl {
  private _strict: boolean;
  private _thisMode: "lexical" | "strict" | "global";
  private _scriptOrModule: StaticJsScriptOrModuleRecord;
  private _environment: StaticJsEnvironmentRecord;

  constructor(
    realm: StaticJsRealm,
    name: string | null,
    private readonly _argumentDeclarations: StaticJsAstFunctionArgument[],
    protected readonly _body: BlockStatement | Expression,
    { thisMode, strict, env, scriptOrModule, ...opts }: StaticJsAstFunctionOptions,
    // Gross circular dependency workaround.
    protected readonly _createFunction: StaticJsFunctionFactory,
  ) {
    super(realm, name, (thisArg, ...args) => this._invoke(thisArg, args), {
      // Rest elements dont count for length.
      length: _argumentDeclarations.filter((x) => x.type !== "RestElement").length,
      ...opts,
    });

    if (strict) {
      this._strict = true;
    } else if (
      _body.type === "BlockStatement" &&
      _body.directives.some(({ value }) => value.value === "use strict")
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

    this._environment = env;

    this._scriptOrModule = scriptOrModule;
  }

  override get ecmaScriptCode(): Node {
    return this._body;
  }

  override get scriptOrModule(): StaticJsScriptOrModuleRecord | null {
    return this._scriptOrModule;
  }

  override get strict(): boolean {
    return this._strict;
  }

  get formalParameters(): StaticJsAstFunctionArgument[] {
    return this._argumentDeclarations;
  }

  get thisMode(): "lexical" | "strict" | "global" {
    return this._thisMode;
  }

  private *_invoke(
    thisArg: StaticJsValue,
    args: StaticJsValue[],
  ): EvaluationGenerator<StaticJsValue> {
    const { realm } = this;

    const calleeContext = yield* this._prepareForOrdinaryCall(realm.types.undefined);

    yield* this._ordinaryCallBindThis(calleeContext, thisArg);

    const result = yield* captureThrownCompletion(this._evaluateBody(args));

    EvaluationContext.pop();

    if (Completion.Return.is(result)) {
      return result.value;
    }

    if (!Completion.Throw.is(result)) {
      throw new StaticJsEngineError(
        "Function execution did not complete with a return or throw completion.",
      );
    }

    throw result;
  }

  protected *_evaluateBody(
    args: StaticJsValue[],
  ): EvaluationGenerator<ReturnCompletion | ThrowCompletion> {
    const { realm, _body } = this;

    yield* functionDeclarationInstantiation(
      this,
      args,
      // Gross circular dependency workaround.
      this._createFunction,
    );

    try {
      yield* Q(EvaluateNodeCommand(_body));
      return Completion.Return(realm.types.undefined);
    } catch (e) {
      if (Completion.Return.is(e)) {
        return e;
      } else {
        throw e;
      }
    }
  }

  private *_prepareForOrdinaryCall(
    _newTarget: StaticJsObjectLike | StaticJsUndefined,
  ): EvaluationGenerator<EvaluationContext> {
    const localEnv = new StaticJsFunctionEnvironmentRecord(
      this,
      this._thisMode === "lexical",
      null,
      this._environment,
      this.realm,
    );

    const calleeContext = EvaluationContext.createFunctionInvocationContext(
      this,
      this._scriptOrModule,
      this.realm,
      localEnv,
    );

    EvaluationContext.push(calleeContext);
    return calleeContext;
  }

  private *_ordinaryCallBindThis(
    context: EvaluationContext,
    thisArg: StaticJsValue,
  ): EvaluationGenerator<void> {
    const thisMode = this._thisMode;
    if (thisMode === "lexical") {
      // Do nothing.
    } else {
      const calleeRealm = this.realm;
      let thisValue: StaticJsValue;
      if (thisMode === "strict") {
        thisValue = thisArg;
      } else {
        if (isStaticJsNull(thisArg) || isStaticJsUndefined(thisArg)) {
          thisValue = calleeRealm.globalThis;
        } else {
          thisValue = yield* toObject(thisArg);
        }
      }

      const localEnv = context.lexicalEnv as StaticJsFunctionEnvironmentRecord;
      localEnv.initializeThis(thisValue);
    }
  }
}
