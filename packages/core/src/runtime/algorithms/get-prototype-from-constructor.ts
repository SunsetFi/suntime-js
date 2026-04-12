import { Q } from "../../evaluator/completions/Q.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { Prototypes } from "../intrinsics/intrinsics.js";
import { StaticJsCallable } from "../types/StaticJsCallable.js";
import { StaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsObjectLike, StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { get } from "./get.js";

export function* getPrototypeFromConstructor(
  constructor: StaticJsCallable,
  intrinsicDefaultProto: keyof Prototypes,
): EvaluationGenerator<StaticJsObjectLike | StaticJsNull> {
  const proto = yield* Q(get(constructor, "prototype"));
  if (!isStaticJsObjectLike(proto)) {
    return constructor.realm.types.prototypes[intrinsicDefaultProto];
  }
  return proto;
}
