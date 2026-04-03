import { Completion } from "../../../evaluator/completions/Completion.js";
import { Q } from "../../../evaluator/completions/Q.js";

import { isStaticJsNull } from "../../types/StaticJsNull.js";
import { isStaticJsObjectLike, StaticJsObjectLike } from "../../types/StaticJsObjectLike.js";

import { IntrinsicPropertyDeclaration } from "../utils.js";

export const reflectSetPrototypeOfDeclaration: IntrinsicPropertyDeclaration = {
  key: "setPrototypeOf",
  *func(realm, _thisArg, target = realm.types.undefined, prototype = realm.types.undefined) {
    if (!isStaticJsObjectLike(target)) {
      throw Completion.Throw("TypeError", "Reflect.setPrototypeOf called on non-object");
    }

    // FIXME: More jank from us accepting direct null instead of realm.types.null
    let proto: StaticJsObjectLike | null;
    if (isStaticJsNull(prototype)) {
      proto = null;
    } else if (isStaticJsObjectLike(prototype)) {
      proto = prototype;
    } else {
      throw Completion.Throw(
        "TypeError",
        "Reflect.setPrototypeOf called with non-object, non-null prototype",
      );
    }

    const success = yield* Q(target.setPrototypeOfEvaluator(proto));
    return realm.types.boolean(success);
  },
};
