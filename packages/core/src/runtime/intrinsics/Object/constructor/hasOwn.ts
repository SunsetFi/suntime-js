import { ReturnCompletion } from "../../../../evaluator/completions/ReturnCompletion.js";

import { isStaticJsNull } from "../../../types/interfaces/StaticJsNull.js";
import { isStaticJsObjectLike } from "../../../types/interfaces/StaticJsObject.js";
import { isStaticJsScalar } from "../../../types/interfaces/StaticJsScalar.js";
import { isStaticJsUndefined } from "../../../types/interfaces/StaticJsUndefined.js";

import { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorHasOwnDeclaration: IntrinsicPropertyDeclaration = {
  name: "hasOwn",
  *func(realm, thisArg, objectValue, keyValue) {
    const obj = (objectValue ?? realm.types.undefined).toObject();

    if (!keyValue) {
      return ReturnCompletion(realm.types.false);
    }

    // This does not appear to box.
    if (!isStaticJsObjectLike(thisArg)) {
      return ReturnCompletion(realm.types.false);
    }

    if (isStaticJsNull(keyValue) || isStaticJsUndefined(keyValue)) {
      return ReturnCompletion(realm.types.false);
    }

    if (!isStaticJsScalar(keyValue)) {
      return ReturnCompletion(realm.types.false);
    }

    const hasProperty = yield* obj.hasPropertyEvaluator(String(keyValue.value));

    return ReturnCompletion(realm.types.boolean(hasProperty));
  },
};

export default objectCtorHasOwnDeclaration;
