import type { StaticJsPropertyKey } from "../../../types/StaticJsObjectLike.js";
import type { StaticJsPropertyDescriptor } from "../../../types/StaticJsPropertyDescriptor.js";

import toObject from "../../../algorithms/to-object.js";

import propertyDescriptorToObject from "../../../utils/property-descriptor-to-object.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorGetOwnPropertyDescriptorsDeclaration: IntrinsicPropertyDeclaration = {
  key: "getOwnPropertyDescriptors",
  *func(realm, _thisArg, objValue) {
    const obj = yield* toObject(objValue ?? realm.types.undefined, realm);

    const keys = yield* obj.ownPropertyKeysEvaluator();

    const descriptors = new Map<StaticJsPropertyKey, StaticJsPropertyDescriptor>();

    for (const key of keys) {
      const descriptor = yield* obj.getOwnPropertyEvaluator(key);
      if (!descriptor) {
        continue;
      }

      const descObject = yield* propertyDescriptorToObject(descriptor, realm);
      descriptors.set(key, {
        enumerable: true,
        writable: true,
        configurable: true,
        value: descObject,
      });
    }

    return realm.types.object(descriptors);
  },
};

export default objectCtorGetOwnPropertyDescriptorsDeclaration;
