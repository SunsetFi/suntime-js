import { toObject } from "../../../algorithms/to-object.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorIsSealedDeclaration: IntrinsicPropertyDeclaration = {
  key: "isSealed",
  length: 1,
  *func(realm, _thisArg, objValue = realm.types.undefined) {
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
    }

    return realm.types.true;
  },
};

export default objectCtorIsSealedDeclaration;
