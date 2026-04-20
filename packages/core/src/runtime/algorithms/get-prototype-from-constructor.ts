import { Q } from "../../evaluator/completions/Q.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { Prototypes } from "../intrinsics/intrinsics.js";
import { StaticJsCallable } from "../types/StaticJsCallable.js";
import { isStaticJsObject, StaticJsObject } from "../types/StaticJsObject.js";

import { get } from "./get.js";

export function* getPrototypeFromConstructor(
  constructor: StaticJsCallable,
  intrinsicDefaultProto: keyof Prototypes,
): EvaluationGenerator<StaticJsObject> {
  const proto = yield* Q(get(constructor, "prototype"));
  if (!isStaticJsObject(proto)) {
    return constructor.realm.types.prototypes[intrinsicDefaultProto];
  }
  return proto;
}
