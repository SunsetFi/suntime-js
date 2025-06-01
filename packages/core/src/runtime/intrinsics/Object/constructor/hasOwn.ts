import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsObjectLike } from "../../../types/StaticJsObject.js";
import { isStaticJsScalar } from "../../../types/StaticJsScalar.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorHasOwnDeclaration: IntrinsicPropertyDeclaration = {
  name: "hasOwn",
  *func(realm, thisArg, objectValue, keyValue) {
    const obj = (objectValue ?? realm.types.undefined).toObject();

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

    const hasProperty = yield* obj.hasPropertyEvaluator(String(keyValue.value));

    return realm.types.boolean(hasProperty);
  },
};

export default objectCtorHasOwnDeclaration;
