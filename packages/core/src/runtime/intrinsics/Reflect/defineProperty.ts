import { Completion } from "../../../evaluator/completions/Completion.js";
import { Q } from "../../../evaluator/completions/Q.js";
import { toPropertyDescriptor } from "../../algorithms/to-property-descriptor.js";
import { isStaticJsObject } from "../../types/StaticJsObject.js";
import { toPropertyKey } from "../../utils/to-property-key.js";
import { IntrinsicPropertyDeclaration } from "../utils.js";

export const reflectDefinePropertyDeclaration: IntrinsicPropertyDeclaration = {
  key: "defineProperty",
  length: 3,
  *func(
    realm,
    _thisArg,
    target = realm.types.undefined,
    propertyKey = realm.types.undefined,
    attributes = realm.types.undefined,
  ) {
    if (!isStaticJsObject(target)) {
      throw Completion.Throw("TypeError", "Reflect.defineProperty called on non-object");
    }

    const key = yield* toPropertyKey(propertyKey);
    const desc = yield* toPropertyDescriptor(attributes);

    const success = yield* Q(target.defineOwnPropertyEvaluator(key, desc));
    return realm.types.boolean(success);
  },
};
