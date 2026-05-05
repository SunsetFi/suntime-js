// HACK: This is here because we cant instantiate a StaticJsNativeFunction
// during the prototype init phase due to how our intrnsic init is set up.
// This can and should be fixed by progressively adding items to TypeFactory

import { Completion } from "../../../../evaluator/completions/Completion.js";
import { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import { StaticJsRunTaskOptions } from "../../../tasks/StaticJsRunTaskOptions.js";
import { StaticJsOrdinaryObjectImpl } from "../../../types/implementation/objects/StaticJsOrdinaryObjectImpl.js";
import { StaticJsCallable } from "../../../types/StaticJsCallable.js";
import { StaticJsObject } from "../../../types/StaticJsObject.js";
import { StaticJsTypeCode } from "../../../types/StaticJsTypeCode.js";
import { StaticJsValue } from "../../../types/StaticJsValue.js";

// instead of all at once at the end.
export class StaticJsFunctionPrototypeImpl
  extends StaticJsOrdinaryObjectImpl
  implements StaticJsCallable
{
  override get typeOf() {
    return "function";
  }

  override get runtimeTypeOf() {
    return "function";
  }

  override get runtimeTypeCode() {
    return StaticJsTypeCode.Function;
  }

  get isConstructor(): boolean {
    return false;
  }

  callAsync(
    thisArg: StaticJsValue,
    args?: StaticJsValue[],
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsValue> {
    return this.realm.invokeEvaluatorAsync(this.callEvaluator(thisArg, args), opts);
  }

  callSync(
    thisArg: StaticJsValue,
    args?: StaticJsValue[],
    opts?: StaticJsRunTaskOptions,
  ): StaticJsValue {
    return this.realm.invokeEvaluatorSync(this.callEvaluator(thisArg, args), opts);
  }

  *callEvaluator(
    _thisArg: StaticJsValue,
    _args?: StaticJsValue[],
  ): EvaluationGenerator<StaticJsValue> {
    return this.realm.types.undefined;
  }

  constructAsync(
    args?: StaticJsValue[],
    newTarget?: StaticJsCallable,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsObject> {
    return this.realm.invokeEvaluatorAsync(this.constructEvaluator(args, newTarget), opts);
  }

  constructSync(
    args?: StaticJsValue[],
    newTarget?: StaticJsCallable,
    opts?: StaticJsRunTaskOptions,
  ): StaticJsObject {
    return this.realm.invokeEvaluatorSync(this.constructEvaluator(args, newTarget), opts);
  }

  constructEvaluator(
    _args?: StaticJsValue[],
    _newTarget?: StaticJsCallable,
  ): EvaluationGenerator<StaticJsObject> {
    throw Completion.Throw("TypeError", "Function.prototype is not a constructor");
  }
}
