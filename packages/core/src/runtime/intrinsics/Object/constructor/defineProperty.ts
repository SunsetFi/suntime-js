import { isThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";
import {
  NormalCompletion,
  ThrowCompletion,
} from "../../../../evaluator/internal.js";
import {
  isStaticJsNull,
  isStaticJsObjectLike,
  isStaticJsScalar,
  isStaticJsUndefined,
  validateStaticJsPropertyDescriptor,
} from "../../../types/index.js";
import toPropertyDescriptor from "../../../utils/to-property-descriptor.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorDefinePropertyDeclaration: IntrinsicPropertyDeclaration = {
  name: "defineProperty",
  *func(realm, _thisArg, targetValue, propertyNameValue, propertyDescriptor) {
    if (!isStaticJsObjectLike(targetValue)) {
      return ThrowCompletion(
        realm.types.string(
          "TypeError: Object.defineProperties called on non-object",
        ),
      );
    }

    if (
      !propertyNameValue ||
      !isStaticJsScalar(propertyNameValue) ||
      isStaticJsNull(propertyNameValue) ||
      isStaticJsUndefined(propertyNameValue)
    ) {
      return ThrowCompletion(
        realm.types.string(
          "TypeError: Object.defineProperties called with non-object",
        ),
      );
    }

    const propertyName = propertyNameValue.toString();

    if (!isStaticJsObjectLike(propertyDescriptor)) {
      return ThrowCompletion(
        realm.types.string("TypeError: Property description must be an object"),
      );
    }

    const descriptor = yield* toPropertyDescriptor(realm, propertyDescriptor);
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

    yield* targetValue.definePropertyEvaluator(propertyName, descriptor);

    return NormalCompletion(targetValue);
  },
};

export default objectCtorDefinePropertyDeclaration;
