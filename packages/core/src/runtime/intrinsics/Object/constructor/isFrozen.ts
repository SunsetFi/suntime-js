import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import toObject from "../../../algorithms/to-object.js";
import { isStaticJsDataPropertyDescriptor } from "../../../types/StaticJsPropertyDescriptor.js";

const objectCtorIsFrozenDeclaration: IntrinsicPropertyDeclaration = {
  key: "isFrozen",
  *func(realm, _thisArg, objValue = realm.types.undefined) {
    // TODO: Is not extensible, all properties are nonconfigurable, all data properties are non writable.
    const obj = yield* toObject(objValue);

    const extensible = yield* obj.isExtensibleEvaluator();
    if (extensible) {
      return realm.types.false;
    }

    const keys = yield* obj.ownPropertyKeysEvaluator();
    for (const key of keys) {
      const descriptor = yield* obj.getOwnPropertyEvaluator(key);
      if (!descriptor) {
        continue;
      }

      if (descriptor.configurable) {
        return realm.types.false;
      }

      if (isStaticJsDataPropertyDescriptor(descriptor) && descriptor.writable) {
        return realm.types.false;
      }
    }

    return realm.types.true;
  },
};

export default objectCtorIsFrozenDeclaration;
