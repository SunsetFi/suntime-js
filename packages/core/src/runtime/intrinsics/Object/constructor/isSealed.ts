import toObject from "../../../algorithms/to-object.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorIsSealedDeclaration: IntrinsicPropertyDeclaration = {
  key: "isSealed",
  *func(realm, _thisArg, objValue) {
    // TODO: Is not extensible, all properties are nonconfigurable, all data properties are non writable.
    const obj = yield* toObject(objValue ?? realm.types.undefined, realm);

    if (obj.extensible) {
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
    }

    return realm.types.true;
  },
};

export default objectCtorIsSealedDeclaration;
