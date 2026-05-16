import { toObject } from "../../../algorithms/to-object.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { propertyDescriptorToStaticJsObject } from "../../../types/StaticJsPropertyDescriptor.js";
import { isStaticJsScalar } from "../../../types/StaticJsScalar.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import { toPropertyKey } from "../../../utils/to-property-key.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const objectCtorGetOwnPropertyDescriptorDeclaration: IntrinsicPropertyDeclaration = {
  key: "getOwnPropertyDescriptor",
  length: 2,
  *func(realm, _thisArg, objValue = realm.types.undefined, propValue) {
    const obj = yield* toObject(objValue);

    if (
      !propValue ||
      !isStaticJsScalar(propValue) ||
      isStaticJsNull(propValue) ||
      isStaticJsUndefined(propValue)
    ) {
      return realm.types.undefined;
    }

    const key = yield* toPropertyKey(propValue);
    const descriptor = yield* obj.getOwnPropertyEvaluator(key);

    if (!descriptor) {
      return realm.types.undefined;
    }

    return yield* propertyDescriptorToStaticJsObject(descriptor, realm);
  },
};

export default objectCtorGetOwnPropertyDescriptorDeclaration;
