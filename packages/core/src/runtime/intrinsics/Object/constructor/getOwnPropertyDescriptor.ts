import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsScalar } from "../../../types/StaticJsScalar.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import propertyDescriptorToObject from "../../../utils/property-descriptor-to-object.js";
import toObject from "../../../algorithms/to-object.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorGetOwnPropertyDescriptorDeclaration: IntrinsicPropertyDeclaration =
  {
    key: "getOwnPropertyDescriptor",
    *func(realm, _thisArg, objValue, propValue) {
      const obj = yield* toObject(objValue ?? realm.types.undefined, realm);

      if (
        !propValue ||
        !isStaticJsScalar(propValue) ||
        isStaticJsNull(propValue) ||
        isStaticJsUndefined(propValue)
      ) {
        return realm.types.undefined;
      }

      const descriptor = yield* obj.getOwnPropertyEvaluator(
        propValue.toStringSync(),
      );

      if (!descriptor) {
        return realm.types.undefined;
      }

      return yield* propertyDescriptorToObject(descriptor, realm);
    },
  };

export default objectCtorGetOwnPropertyDescriptorDeclaration;
