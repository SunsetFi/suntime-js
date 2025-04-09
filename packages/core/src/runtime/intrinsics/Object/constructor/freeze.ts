import { NormalCompletion } from "../../../../evaluator/internal.js";
import { isStaticJsNull, isStaticJsUndefined } from "../../../types/index.js";
import { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorFreezeDeclaration: IntrinsicPropertyDeclaration = {
  name: "freeze",
  *func(realm, thisArg, targetValue) {
    if (!targetValue) {
      targetValue = realm.types.undefined;
    }
    if (isStaticJsNull(targetValue) || isStaticJsUndefined(targetValue)) {
      return NormalCompletion(targetValue);
    }

    const obj = targetValue.toObject();
    yield* obj.preventExtensionEvaluator();

    return NormalCompletion(targetValue);
  },
};

export default objectCtorFreezeDeclaration;
