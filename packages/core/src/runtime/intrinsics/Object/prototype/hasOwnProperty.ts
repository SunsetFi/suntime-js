import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsObjectLike } from "../../../types/StaticJsObjectLike.js";
import { isStaticJsScalar } from "../../../types/StaticJsScalar.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectProtoHasOwnPropertyDeclaration: IntrinsicPropertyDeclaration = {
  key: "hasOwnProperty",
  *func(realm, thisArg, keyValue) {
    if (!keyValue) {
      return realm.types.false;
    }

    // This does not appear to box.
    if (!isStaticJsObjectLike(thisArg)) {
      return realm.types.false;
    }

    if (isStaticJsNull(keyValue) || isStaticJsUndefined(keyValue)) {
      return realm.types.false;
    }

    if (!isStaticJsScalar(keyValue)) {
      return realm.types.false;
    }

    const hasProperty = thisArg.getOwnPropertySync(String(keyValue.value)) != null;

    return realm.types.boolean(hasProperty);
  },
};

export default objectProtoHasOwnPropertyDeclaration;
