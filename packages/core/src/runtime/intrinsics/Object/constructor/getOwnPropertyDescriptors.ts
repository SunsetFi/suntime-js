import toObject from "../../../algorithms/to-object.js";

import propertyDescriptorToObject from "../../../utils/property-descriptor-to-object.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorGetOwnPropertyDescriptorsDeclaration: IntrinsicPropertyDeclaration =
  {
    key: "getOwnPropertyDescriptors",
    *func(realm, _thisArg, objValue) {
      const obj = yield* toObject(objValue ?? realm.types.undefined, realm);

      const keys = yield* obj.getOwnKeysEvaluator();
      const symbols = yield* obj.getOwnSymbolsEvaluator();

      const descriptorsObj = realm.types.object();

      for (const key of [...keys, ...symbols]) {
        const descriptor = yield* obj.getOwnPropertyDescriptorEvaluator(key);
        if (!descriptor) {
          continue;
        }

        const descObject = yield* propertyDescriptorToObject(descriptor, realm);
        yield* descriptorsObj.definePropertyEvaluator(key, {
          enumerable: true,
          writable: true,
          configurable: true,
          value: descObject,
        });
      }

      return descriptorsObj;
    },
  };

export default objectCtorGetOwnPropertyDescriptorsDeclaration;
