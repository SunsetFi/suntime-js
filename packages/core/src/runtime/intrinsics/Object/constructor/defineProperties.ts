import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import toObject from "../../../algorithms/to-object.js";

import { isStaticJsObjectLike } from "../../../types/StaticJsObjectLike.js";
import { validateStaticJsPropertyDescriptor } from "../../../types/StaticJsPropertyDescriptor.js";

import objectToPropertyDescriptor from "../../../utils/object-to-property-descriptor.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorDefinePropertiesDeclaration: IntrinsicPropertyDeclaration = {
  key: "defineProperties",
  *func(realm, _thisArg, targetValue, propertiesValue) {
    if (!isStaticJsObjectLike(targetValue)) {
      throw new ThrowCompletion(
        realm.types.error(
          "TypeError",
          "Object.defineProperties called on non-object",
        ),
      );
    }

    const propertiesObj = yield* toObject(
      propertiesValue ?? realm.types.undefined,
      realm,
    );
    // Don't see it defined whether this should be all keys or own keys and whether enumerable plays in,
    // but testing on NodeJs shows that this is own enumerable.
    const keys = yield* propertiesObj.getOwnEnumerableKeysEvaluator();
    for (const key of keys) {
      const descriptorObj = yield* propertiesObj.getPropertyEvaluator(key);
      if (!isStaticJsObjectLike(descriptorObj)) {
        throw new ThrowCompletion(
          realm.types.error(
            "TypeError",
            "Property description must be an object",
          ),
        );
      }
      const descriptor = yield* objectToPropertyDescriptor(
        descriptorObj,
        realm,
      );
      try {
        validateStaticJsPropertyDescriptor(descriptor);
      } catch (e: unknown) {
        throw new ThrowCompletion(
          realm.types.error("TypeError", (e as Error).message),
        );
      }

      yield* targetValue.definePropertyEvaluator(key, descriptor);
    }

    return targetValue;
  },
};

export default objectCtorDefinePropertiesDeclaration;
