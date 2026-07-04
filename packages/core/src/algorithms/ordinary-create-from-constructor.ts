import type { Prototypes } from "#intrinsics/intrinsics.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsCallable } from "#types/StaticJsCallable.js";
import type { StaticJsObject } from "#types/StaticJsObject.js";

import { EvaluationContext } from "#evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";

import { getPrototypeFromConstructor } from "./get-prototype-from-constructor.js";

export function* ordinaryCreateFromConstructor<TObj extends StaticJsObject = StaticJsObject>(
  newTarget: StaticJsCallable,
  intrinsicDefaultProto: keyof Prototypes,
  // A `static create` factory (e.g. `StaticJsErrorImpl.create`), not the raw
  // class, since StaticJsAllocation classes only expose construction through
  // their `create` factory (protected constructors). The factory takes a single
  // params object (`{ realm, prototype }`), matching the object `create` shape.
  internalSlotProvider?: (params: { realm: StaticJsRealm; prototype: StaticJsObject }) => TObj,
): EvaluationGenerator<TObj> {
  const proto = yield* getPrototypeFromConstructor(newTarget, intrinsicDefaultProto);

  if (internalSlotProvider) {
    return internalSlotProvider({ realm: EvaluationContext.current.realm, prototype: proto });
  }

  return EvaluationContext.current.realm.types.object(undefined, proto) as TObj;
}
