import { StaticJsEngineError } from "../../../errors/StaticJsEngineError.js";
import { Completion } from "../../../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import type { StaticJsFunction } from "../../types/StaticJsFunction.js";
import { isStaticJsObject, StaticJsObject } from "../../types/StaticJsObject.js";
import { type StaticJsValue } from "../../types/StaticJsValue.js";
import type { StaticJsEnvironmentRecord } from "../StaticJsEnvironmentRecord.js";

import { StaticJsDeclarativeEnvironmentRecord } from "./StaticJsDeclarativeEnvironmentRecord.js";

// Some circular reference with StaticJsMethodFunction.
// How do we fix this?
const HackFunctionMethodClassNames = new Set([
  "StaticJsClassConstructorFunction",
  "StaticJsMethodFunction",
]);

export class StaticJsFunctionEnvironmentRecord extends StaticJsDeclarativeEnvironmentRecord {
  private _thisBindingStatus: "lexical" | "initialized" | "uninitialized";
  private _thisValue: StaticJsValue | null;

  constructor(
    private readonly _functionObject: StaticJsFunction,
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

  get functionObject() {
    return this._functionObject;
  }

  get thisBindingStatus() {
    return this._thisBindingStatus;
  }

  *bindThisValue(thisValue: StaticJsValue): EvaluationGenerator<void> {
    if (this._thisBindingStatus === "initialized") {
      throw Completion.Throw("ReferenceError", "This binding has already been initialized");
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

  // Weirdly only seems to be used in PerformEval
  override *hasSuperBindingEvaluator(): EvaluationGenerator<boolean> {
    if (this._thisBindingStatus === "lexical") {
      return false;
    }

    const func = this._functionObject;

    // HACK HACK HACK: Circular imports??
    // if (func instanceof StaticJsMethodFunction === false) {
    //   return false;
    // }
    if (!HackFunctionMethodClassNames.has(func.constructor.name)) {
      return false;
    }

    return true;
  }

  override *getSuperBaseEvaluator(): EvaluationGenerator<StaticJsValue> {
    const func = this._functionObject;
    // HACK HACK HACK: Circular imports??
    // if (func instanceof StaticJsMethodFunction === false) {
    //   return this._realm.types.undefined;
    // }
    if (!HackFunctionMethodClassNames.has(func.constructor.name)) {
      return this._realm.types.undefined;
    }

    const home = (func as any).homeObject;
    if (!isStaticJsObject(home)) {
      return this._realm.types.undefined;
    }

    const proto = yield* home.getPrototypeOfEvaluator();
    return proto ?? this._realm.types.undefined;
  }
}
