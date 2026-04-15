import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import type { StaticJsFunction } from "../../types/StaticJsFunction.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";
import type { StaticJsEnvironmentRecord } from "../StaticJsEnvironmentRecord.js";

import { StaticJsEngineError } from "../../../errors/StaticJsEngineError.js";
import { Completion } from "../../../evaluator/completions/Completion.js";
import { StaticJsObject } from "../../types/StaticJsObject.js";
import { StaticJsDeclarativeEnvironmentRecord } from "./StaticJsDeclarativeEnvironmentRecord.js";

export class StaticJsFunctionEnvironmentRecord extends StaticJsDeclarativeEnvironmentRecord {
  private _thisBindingStatus: "lexical" | "initialized" | "uninitialized";
  private _thisValue: StaticJsValue | null;

  constructor(
    _functionObject: StaticJsFunction,
    private readonly _newTarget: StaticJsObject | null,
    lexical: boolean,
    outerEnv: StaticJsEnvironmentRecord,
    realm: StaticJsRealm,
  ) {
    super(outerEnv, realm);
    this._thisBindingStatus = lexical ? "lexical" : "uninitialized";
    this._thisValue = null;
  }

  get newTarget() {
    return this._newTarget ?? this._realm.types.undefined;
  }

  initializeThis(thisValue: StaticJsValue): void {
    if (this._thisBindingStatus !== "uninitialized") {
      throw new StaticJsEngineError("This binding has already been initialized.");
    }

    this._thisValue = thisValue;
    this._thisBindingStatus = "initialized";
  }

  override *hasThisBindingEvaluator(): EvaluationGenerator<boolean> {
    return this._thisBindingStatus !== "lexical";
  }

  override *getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue> {
    if (this._thisBindingStatus === "lexical") {
      throw new StaticJsEngineError("Cannot get 'this' binding from lexical function environment.");
    }

    if (this._thisBindingStatus === "initialized") {
      return this._thisValue!;
    }

    throw Completion.Throw("ReferenceError", "This binding is uninitialized");
  }
}
