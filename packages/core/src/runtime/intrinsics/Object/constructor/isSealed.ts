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

    const keys = yield* obj.getOwnKeysEvaluator();
    const symbols = yield* obj.getOwnSymbolsEvaluator();
    const allKeys = [...keys, ...symbols];

    for (const key of allKeys) {
      const descriptor = yield* obj.getOwnPropertyDescriptorEvaluator(key);
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
