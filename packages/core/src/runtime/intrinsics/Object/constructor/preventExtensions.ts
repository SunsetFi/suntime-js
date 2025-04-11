import { NormalCompletion } from "../../../../evaluator/internal.js";
import { isStaticJsNull, isStaticJsUndefined } from "../../../types/index.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorPreventExtensionsDeclaration: IntrinsicPropertyDeclaration = {
  name: "preventExtensions",
  *func(realm, thisArg, targetValue) {
    if (!targetValue) {
      targetValue = realm.types.undefined;
    }
    if (isStaticJsNull(targetValue) || isStaticJsUndefined(targetValue)) {
      return NormalCompletion(targetValue);
    }

    const obj = targetValue.toObject();
    yield* obj.preventExtensionsEvaluator();

    return NormalCompletion(targetValue);
  },
};

export default objectCtorPreventExtensionsDeclaration;
