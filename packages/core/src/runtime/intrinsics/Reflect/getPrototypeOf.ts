import { Completion } from "../../../evaluator/completions/Completion.js";
import { Q } from "../../../evaluator/completions/Q.js";
import { isStaticJsObject } from "../../types/StaticJsObject.js";
import { IntrinsicPropertyDeclaration } from "../apply-intrinsic-properties.js";

export const reflectGetPrototypeOfDeclaration: IntrinsicPropertyDeclaration = {
  key: "getPrototypeOf",
  length: 1,
  *func(realm, _thisArg, target = realm.types.undefined) {
    if (!isStaticJsObject(target)) {
      throw Completion.Throw("TypeError", "Reflect.getPrototypeOf called on non-object");
    }

    const proto = yield* Q(target.getPrototypeOfEvaluator());
    if (proto == null) {
      return realm.types.null;
    }

    return proto;
  },
};
