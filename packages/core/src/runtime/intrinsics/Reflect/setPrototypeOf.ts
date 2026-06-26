import { Completion } from "../../../evaluator/completions/Completion.js";
import { Q } from "../../../evaluator/completions/Q.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsObject, type StaticJsObject } from "../../../types/StaticJsObject.js";
import type { IntrinsicPropertyDeclaration } from "../apply-intrinsic-properties.js";

export const reflectSetPrototypeOfDeclaration: IntrinsicPropertyDeclaration = {
  key: "setPrototypeOf",
  length: 2,
  *func(realm, _thisArg, target = realm.types.undefined, prototype = realm.types.undefined) {
    if (!isStaticJsObject(target)) {
      throw yield* Completion.Throw.create(
        "TypeError",
        "Reflect.setPrototypeOf called on non-object",
      );
    }

    // FIXME: More jank from us accepting direct null instead of realm.types.null
    let proto: StaticJsObject | null;
    if (isStaticJsNull(prototype)) {
      proto = null;
    } else if (isStaticJsObject(prototype)) {
      proto = prototype;
    } else {
      throw yield* Completion.Throw.create(
        "TypeError",
        "Reflect.setPrototypeOf called with non-object, non-null prototype",
      );
    }

    const success = yield* Q(target.setPrototypeOfEvaluator(proto));
    return realm.types.boolean(success);
  },
};
