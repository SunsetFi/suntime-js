import { type Node, type BlockStatement, type Expression } from "@babel/types";

import EvaluationContext from "../../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import functionDeclarationInstantiation from "../../../evaluator/instantiation/function-declaration-instantiation.js";

import { EvaluateNodeCommand } from "../../../evaluator/commands/EvaluateNodeCommand.js";

import type { StaticJsEnvironmentRecord } from "../../environments/StaticJsEnvironmentRecord.js";
import StaticJsFunctionEnvironmentRecord from "../../environments/implementation/StaticJsFunctionEnvironmentRecord.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import toObject from "../../algorithms/to-object.js";

import type { StaticJsValue } from "../StaticJsValue.js";
import { isStaticJsNull } from "../StaticJsNull.js";
import { isStaticJsUndefined } from "../StaticJsUndefined.js";

import StaticJsFunctionBase, { type StaticJsFunctionImplOptions } from "./StaticJsFunctionImpl.js";

import type { StaticJsAstFunctionArgument } from "./StaticJsAstFunctionArgument.js";
import type { StaticJsFunctionFactory } from "./StaticJsFunctionFactory.js";
import { ReturnCompletion } from "../../../evaluator/completions/ReturnCompletion.js";

export default abstract class StaticJsAstFunction extends StaticJsFunctionBase {
  private _strict: boolean;
  private _thisMode: "lexical" | "strict" | "global";
  private _environment: StaticJsEnvironmentRecord;

  constructor(
    realm: StaticJsRealm,
    name: string | null,
    thisMode: "lexical-this" | "non-lexical-this",
    private readonly _argumentDeclarations: StaticJsAstFunctionArgument[],
    context: EvaluationContext,
    protected readonly _body: BlockStatement | Expression,
    // Gross circular dependency workaround.
    private readonly _createFunction: StaticJsFunctionFactory,
    opts?: StaticJsFunctionImplOptions,
  ) {
    super(realm, name, (thisArg, ...args) => this._invoke(thisArg, args), {
      length: _argumentDeclarations.length,
      ...opts,
    });

    if (context.strict) {
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

    this._environment = context.lexicalEnv;
  }

  get ECMAScriptCode(): Node | Expression {
    return this._body;
  }

  get strict(): boolean {
    return this._strict;
  }

  get formalParameters(): StaticJsAstFunctionArgument[] {
    return this._argumentDeclarations;
  }

  get thisMode(): "lexical" | "strict" | "global" {
    return this._thisMode;
  }

  protected *_invoke(
    thisArg: StaticJsValue,
    args: StaticJsValue[],
  ): EvaluationGenerator<StaticJsValue> {
    const functionContext = yield* this._createContext(thisArg, args);

    let result: StaticJsValue = this.realm.types.undefined;
    try {
      yield* EvaluateNodeCommand(this._body, functionContext);
    } catch (e) {
      if (e instanceof ReturnCompletion) {
        result = e.value;
      } else {
        throw e;
      }
    }

    return result;
  }

  protected *_createContext(
    thisArg: StaticJsValue,
    args: StaticJsValue[],
  ): EvaluationGenerator<EvaluationContext> {
    // This is a mess of PrepareForOrdinaryCall, OrdinaryCallBindThis and parts of OrdinaryCallEvaluateBody.

    // Note: Spec says we use the function's [[Environment]] here, which I haven't tracked down, but I'm assuming is the lexical environment of
    // the function binding.
    const localEnv = new StaticJsFunctionEnvironmentRecord(
      this,
      this._thisMode === "lexical",
      null,
      this._environment,
      this.realm,
    );
    const calleeContext = EvaluationContext.createFunctionInvocationContext(
      this,
      this.realm,
      localEnv,
    );

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
          thisValue = yield* toObject(thisArg, calleeRealm);
        }
      }

      localEnv.initializeThis(thisValue);
    }

    yield* functionDeclarationInstantiation(
      this,
      args,
      calleeContext,
      // Gross circular dependency workaround.
      this._createFunction,
    );

    return calleeContext;
  }
}
