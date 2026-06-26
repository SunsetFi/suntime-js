import { toObject } from "../../../algorithms/to-object.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsObject } from "../../../types/StaticJsObject.js";
import { isStaticJsScalar } from "../../../types/StaticJsScalar.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const objectCtorHasOwnDeclaration: IntrinsicPropertyDeclaration = {
  key: "hasOwn",
  length: 2,
  *func(realm, thisArg, objectValue = realm.types.undefined, keyValue) {
    const obj = yield* toObject(objectValue);

    if (!keyValue) {
      return realm.types.false;
    }

    // This does not appear to box.
    if (!isStaticJsObject(thisArg)) {
      return realm.types.false;
    }

    if (isStaticJsNull(keyValue) || isStaticJsUndefined(keyValue)) {
      return realm.types.false;
    }

    if (!isStaticJsScalar(keyValue)) {
      return realm.types.false;
    }

    const hasProperty = yield* obj.hasOwnPropertyEvaluator(String(keyValue.value));

    return realm.types.boolean(hasProperty);
  },
};

export default objectCtorHasOwnDeclaration;
