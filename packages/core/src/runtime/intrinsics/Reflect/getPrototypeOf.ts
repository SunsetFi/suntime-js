import { Completion } from "../../../evaluator/completions/Completion.js";
import { Q } from "../../../evaluator/completions/Q.js";

import { isStaticJsObjectLike } from "../../types/StaticJsObjectLike.js";

import { IntrinsicPropertyDeclaration } from "../utils.js";

export const reflectGetPrototypeOfDeclaration: IntrinsicPropertyDeclaration = {
  key: "getPrototypeOf",
  *func(realm, _thisArg, target = realm.types.undefined) {
    if (!isStaticJsObjectLike(target)) {
      throw Completion.Throw("TypeError", "Reflect.getPrototypeOf called on non-object");
    }

    const proto = yield* Q(target.getPrototypeOfEvaluator());
    if (proto == null) {
      return realm.types.null;
    }

    return proto;
  },
};
