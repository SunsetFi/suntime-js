import { Completion } from "../../../evaluator/completions/Completion.js";
import { Q } from "../../../evaluator/completions/Q.js";

import { isStaticJsObjectLike } from "../../types/StaticJsObjectLike.js";
import { fromPropertyDescriptor } from "../../utils/fromPropertyDescriptor.js";
import { toPropertyKey } from "../../utils/to-property-key.js";

import { IntrinsicPropertyDeclaration } from "../utils.js";

export const reflectGetOwnPropertyDescriptorDeclaration: IntrinsicPropertyDeclaration = {
  key: "getOwnPropertyDescriptor",
  *func(realm, _thisArg, target = realm.types.undefined, propertyKey = realm.types.undefined) {
    if (!isStaticJsObjectLike(target)) {
      throw Completion.Throw("TypeError", "Reflect.getOwnPropertyDescriptor called on non-object");
    }

    const key = yield* toPropertyKey(propertyKey);

    const descr = yield* Q(target.getOwnPropertyEvaluator(key));
    return yield* fromPropertyDescriptor(descr, realm);
  },
};
