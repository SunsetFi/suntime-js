import { ReturnCompletion } from "../../../../evaluator/completions/ReturnCompletion.js";

import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsObjectLike } from "../../../types/StaticJsObject.js";
import { isStaticJsScalar } from "../../../types/StaticJsScalar.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectProtoHasOwnPropertyDeclaration: IntrinsicPropertyDeclaration = {
  name: "hasOwnProperty",
  *func(realm, thisArg, keyValue) {
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

    const hasProperty =
      thisArg.getOwnPropertyDescriptor(String(keyValue.value)) != null;

    return ReturnCompletion(realm.types.boolean(hasProperty));
  },
};

export default objectProtoHasOwnPropertyDeclaration;
