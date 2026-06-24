import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { Constructor } from "../../ts-types/Constructor.js";
import type { Prototypes } from "../intrinsics/intrinsics.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import type { StaticJsCallable } from "../types/StaticJsCallable.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";

import { getPrototypeFromConstructor } from "./get-prototype-from-constructor.js";

export function* ordinaryCreateFromConstructor<TObj extends StaticJsObject = StaticJsObject>(
  newTarget: StaticJsCallable,
  intrinsicDefaultProto: keyof Prototypes,
  internalSlotProvider?: Constructor<TObj, [realm: StaticJsRealm, prototype: StaticJsObject]>,
): EvaluationGenerator<TObj> {
  const proto = yield* getPrototypeFromConstructor(newTarget, intrinsicDefaultProto);

  if (internalSlotProvider) {
    return new internalSlotProvider(EvaluationContext.current.realm, proto);
  }

  return EvaluationContext.current.realm.types.object(undefined, proto) as TObj;
}
