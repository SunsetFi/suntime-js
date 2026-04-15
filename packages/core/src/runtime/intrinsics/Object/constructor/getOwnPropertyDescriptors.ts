import { toObject } from "../../../algorithms/to-object.js";
import type { StaticJsPropertyDescriptor } from "../../../types/StaticJsPropertyDescriptor.js";
import type { StaticJsPropertyKey } from "../../../types/StaticJsPropertyKey.js";
import { fromPropertyDescriptor } from "../../../utils/fromPropertyDescriptor.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorGetOwnPropertyDescriptorsDeclaration: IntrinsicPropertyDeclaration = {
  key: "getOwnPropertyDescriptors",
  *func(realm, _thisArg, objValue = realm.types.undefined) {
    const obj = yield* toObject(objValue);

    const keys = yield* obj.ownPropertyKeysEvaluator();

    const descriptors = new Map<StaticJsPropertyKey, StaticJsPropertyDescriptor>();

    for (const key of keys) {
      const descriptor = yield* obj.getOwnPropertyEvaluator(key);
      if (!descriptor) {
        continue;
      }

      const descObject = yield* fromPropertyDescriptor(descriptor, realm);
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
