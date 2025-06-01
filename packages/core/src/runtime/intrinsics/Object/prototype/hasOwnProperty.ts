import { ReturnCompletion } from "../../../../evaluator/completions/ReturnCompletion.js";

import { isStaticJsNull } from "../../../types/interfaces/StaticJsNull.js";
import { isStaticJsObjectLike } from "../../../types/interfaces/StaticJsObject.js";
import { isStaticJsScalar } from "../../../types/interfaces/StaticJsScalar.js";
import { isStaticJsUndefined } from "../../../types/interfaces/StaticJsUndefined.js";

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
