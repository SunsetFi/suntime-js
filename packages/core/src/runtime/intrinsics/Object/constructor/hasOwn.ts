import { ReturnCompletion } from "../../../../evaluator/completions/ReturnCompletion.js";

import {
  isStaticJsNull,
  isStaticJsObjectLike,
  isStaticJsScalar,
  isStaticJsUndefined,
} from "../../../types/index.js";
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
