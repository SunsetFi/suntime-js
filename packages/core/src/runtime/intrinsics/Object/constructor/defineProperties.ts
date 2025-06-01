import {
  ThrowCompletion,
  isThrowCompletion,
} from "../../../../evaluator/completions/ThrowCompletion.js";
import { ReturnCompletion } from "../../../../evaluator/completions/ReturnCompletion.js";

import { isStaticJsObjectLike } from "../../../types/StaticJsObject.js";
import { validateStaticJsPropertyDescriptor } from "../../../types/StaticJsPropertyDescriptor.js";

import toPropertyDescriptor from "../../../utils/to-property-descriptor.js";

import { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorDefinePropertiesDeclaration: IntrinsicPropertyDeclaration = {
  name: "defineProperties",
  *func(realm, _thisArg, targetValue, propertiesValue) {
    if (!isStaticJsObjectLike(targetValue)) {
      return ThrowCompletion(
        realm.types.error(
          "TypeError",
          "Object.defineProperties called on non-object",
        ),
      );
    }

    const propertiesObj = (propertiesValue ?? realm.types.undefined).toObject();
    // Don't see it defined whether this should be all keys or own keys and whether enumerable plays in,
    // but testing on NodeJs shows that this is own enumerable.
    const keys = yield* propertiesObj.getOwnEnumerableKeysEvaluator();
    for (const key of keys) {
      const descriptorObj = yield* propertiesObj.getPropertyEvaluator(key);
      if (!isStaticJsObjectLike(descriptorObj)) {
        return ThrowCompletion(
          realm.types.error(
            "TypeError",
            "Property description must be an object",
          ),
        );
      }
      const descriptor = yield* toPropertyDescriptor(realm, descriptorObj);
      if (isThrowCompletion(descriptor)) {
        return descriptor;
      }
      try {
        validateStaticJsPropertyDescriptor(descriptor);
      } catch (e: unknown) {
        return ThrowCompletion(
          realm.types.error("TypeError", (e as Error).message),
        );
      }

      yield* targetValue.definePropertyEvaluator(key, descriptor);
    }

    return ReturnCompletion(targetValue);
  },
};

export default objectCtorDefinePropertiesDeclaration;
