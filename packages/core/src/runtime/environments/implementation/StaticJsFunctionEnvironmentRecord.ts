import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";
import { Completion } from "../../../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import type { StaticJsFunction } from "../../types/StaticJsFunction.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";

import type { StaticJsEnvironmentRecord } from "../StaticJsEnvironmentRecord.js";

import StaticJsDeclarativeEnvironmentRecord from "./StaticJsDeclarativeEnvironmentRecord.js";

export default class StaticJsFunctionEnvironmentRecord extends StaticJsDeclarativeEnvironmentRecord {
  private _thisBindingStatus: "lexical" | "initialized" | "uninitialized";
  private _thisValue: StaticJsValue | null;
  private _functionObject: StaticJsFunction;
  private _newTarget: StaticJsValue | null;

  constructor(
    functionObject: StaticJsFunction,
    lexical: boolean,
    newTarget: StaticJsValue | null,
    outerEnv: StaticJsEnvironmentRecord,
    realm: StaticJsRealm,
  ) {
    super(outerEnv, realm);
    this._functionObject = functionObject;
    this._thisBindingStatus = lexical ? "lexical" : "uninitialized";
    this._thisValue = null;
    this._newTarget = newTarget;
  }

  initializeThis(thisValue: StaticJsValue): void {
    if (this._thisBindingStatus !== "uninitialized") {
      throw new StaticJsEngineError("This binding has already been initialized.");
    }

    this._thisValue = thisValue;
    this._thisBindingStatus = "initialized";
  }

  *hasThisBindingEvaluator(): EvaluationGenerator<boolean> {
    return this._thisBindingStatus !== "lexical";
  }

  *getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue> {
    if (this._thisBindingStatus === "lexical") {
      throw new StaticJsEngineError("Cannot get 'this' binding from lexical function environment.");
    }

    if (this._thisBindingStatus === "initialized") {
      return this._thisValue!;
    }

    throw Completion.Throw(
      this._realm.types.error("ReferenceError", "This binding is uninitialized"),
    );
  }
}
