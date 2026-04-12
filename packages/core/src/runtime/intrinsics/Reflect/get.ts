import { Completion } from "../../../evaluator/completions/Completion.js";
import { Q } from "../../../evaluator/completions/Q.js";

import { isStaticJsObject } from "../../types/StaticJsObject.js";
import { toPropertyKey } from "../../utils/to-property-key.js";

import { IntrinsicPropertyDeclaration } from "../utils.js";

export const reflectGetDeclaration: IntrinsicPropertyDeclaration = {
  key: "get",
  *func(
    realm,
    _thisArg,
    target = realm.types.undefined,
    propertyKey = realm.types.undefined,
    receiver = target,
  ) {
    if (!isStaticJsObject(target)) {
      throw Completion.Throw("TypeError", "Reflect.get called on non-object");
    }

    const key = yield* toPropertyKey(propertyKey);

    return yield* Q(target.getEvaluator(key, receiver));
  },
};
