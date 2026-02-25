import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";

import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import {
  isStaticJsObjectLike,
  type StaticJsObjectPropertyKey,
} from "../../../types/StaticJsObjectLike.js";
import { isStaticJsScalar } from "../../../types/StaticJsScalar.js";
import { validateStaticJsPropertyDescriptor } from "../../../types/StaticJsPropertyDescriptor.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import objectToPropertyDescriptor from "../../../utils/object-to-property-descriptor.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";
import { isStaticJsSymbol } from "../../../types/StaticJsSymbol.js";
import toString from "../../../algorithms/to-string.js";

const objectCtorDefinePropertyDeclaration: IntrinsicPropertyDeclaration = {
  key: "defineProperty",
  *func(realm, _thisArg, targetValue, propertyNameValue, propertyDescriptor) {
    if (!isStaticJsObjectLike(targetValue)) {
      throw new ThrowCompletion(
        realm.types.error("TypeError", "Object.defineProperties called on non-object"),
      );
    }

    if (
      !propertyNameValue ||
      !isStaticJsScalar(propertyNameValue) ||
      isStaticJsNull(propertyNameValue) ||
      isStaticJsUndefined(propertyNameValue)
    ) {
      throw new ThrowCompletion(
        realm.types.error("TypeError", "Object.defineProperties called with non-object"),
      );
    }

    let propertyKey: StaticJsObjectPropertyKey;
    if (isStaticJsSymbol(propertyNameValue)) {
      propertyKey = propertyNameValue;
    } else {
      propertyKey = yield* toString.js(propertyNameValue, realm);
    }

    if (!isStaticJsObjectLike(propertyDescriptor)) {
      throw new ThrowCompletion(
        realm.types.error("TypeError", "Property description must be an object"),
      );
    }

    const descriptor = yield* objectToPropertyDescriptor(propertyDescriptor, realm);
    try {
      validateStaticJsPropertyDescriptor(descriptor);
    } catch (e: unknown) {
      throw new ThrowCompletion(realm.types.error("TypeError", (e as Error).message));
    }

    const success = yield* targetValue.defineOwnPropertyEvaluator(propertyKey, descriptor);
    if (!success) {
      if (!targetValue.extensible) {
        throw new ThrowCompletion(realm.types.error("TypeError", `Object is not extensible`));
      } else {
        // FIXME: Just guessing.
        throw new ThrowCompletion(
          realm.types.error("TypeError", `Cannot redefine property ${propertyKey}`),
        );
      }
    }

    return targetValue;
  },
};

export default objectCtorDefinePropertyDeclaration;
