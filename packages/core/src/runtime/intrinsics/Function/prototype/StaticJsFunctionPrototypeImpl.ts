import { Completion } from "../../../../evaluator/completions/Completion.js";
import { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import { StaticJsAbstractFunction } from "../../../../types/implementation/functions/StaticJsAbstractFunction.js";
import type { StaticJsCallable } from "../../../../types/StaticJsCallable.js";
import type { StaticJsObject } from "../../../../types/StaticJsObject.js";
import { StaticJsTypeCode } from "../../../../types/StaticJsTypeCode.js";
import type { StaticJsValue } from "../../../../types/StaticJsValue.js";

export class StaticJsFunctionPrototypeImpl extends StaticJsAbstractFunction {
  override get typeOf(): "function" {
    return "function";
  }

  override get runtimeTypeOf(): "function" {
    return "function";
  }

  override get runtimeTypeCode() {
    return StaticJsTypeCode.Function;
  }

  *callEvaluator(
    _thisArg: StaticJsValue,
    _args?: StaticJsValue[],
  ): EvaluationGenerator<StaticJsValue> {
    return this.realm.types.undefined;
  }

  *constructEvaluator(
    _args?: StaticJsValue[],
    _newTarget?: StaticJsCallable,
  ): EvaluationGenerator<StaticJsObject> {
    throw yield* Completion.Throw.create("TypeError", "Function.prototype is not a constructor");
  }
}
