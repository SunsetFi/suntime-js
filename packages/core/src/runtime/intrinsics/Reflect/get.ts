import { Completion } from "../../../evaluator/completions/Completion.js";
import { Q } from "../../../evaluator/completions/Q.js";
import { toPropertyKey } from "../../algorithms/to-property-key.js";
import { isStaticJsObject } from "../../types/StaticJsObject.js";
import type { IntrinsicPropertyDeclaration } from "../apply-intrinsic-properties.js";

export const reflectGetDeclaration: IntrinsicPropertyDeclaration = {
  key: "get",
  length: 3,
  *func(
    realm,
    _thisArg,
    target = realm.types.undefined,
    propertyKey = realm.types.undefined,
    receiver = target,
  ) {
    if (!isStaticJsObject(target)) {
      throw yield* Completion.Throw.create("TypeError", "Reflect.get called on non-object");
    }

    const key = yield* toPropertyKey(propertyKey);

    return yield* Q(target.getEvaluator(key, receiver));
  },
};
