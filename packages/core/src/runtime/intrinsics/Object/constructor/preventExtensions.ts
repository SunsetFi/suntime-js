import ReturnCompletion from "../../../../evaluator/completions/ReturnCompletion.js";

import { isStaticJsNull, isStaticJsUndefined } from "../../../types/index.js";

import { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorPreventExtensionsDeclaration: IntrinsicPropertyDeclaration = {
  name: "preventExtensions",
  *func(realm, thisArg, targetValue) {
    if (!targetValue) {
      targetValue = realm.types.undefined;
    }
    if (isStaticJsNull(targetValue) || isStaticJsUndefined(targetValue)) {
      return ReturnCompletion(targetValue);
    }

    const obj = targetValue.toObject();
    yield* obj.preventExtensionsEvaluator();

    return ReturnCompletion(targetValue);
  },
};

export default objectCtorPreventExtensionsDeclaration;
