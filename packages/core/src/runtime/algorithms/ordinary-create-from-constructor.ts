import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { Prototypes } from "../intrinsics/intrinsics.js";
import { StaticJsCallable } from "../types/StaticJsCallable.js";
import { StaticJsObject } from "../types/StaticJsObject.js";
import { getPrototypeFromConstructor } from "./get-prototype-from-constructor.js";

export function* ordinaryCreateFromConstructor(
  newTarget: StaticJsCallable,
  intrinsicDefaultProto: keyof Prototypes,
): EvaluationGenerator<StaticJsObject> {
  const proto = yield* getPrototypeFromConstructor(newTarget, intrinsicDefaultProto);
  return EvaluationContext.current.realm.types.object(undefined, proto);
}
