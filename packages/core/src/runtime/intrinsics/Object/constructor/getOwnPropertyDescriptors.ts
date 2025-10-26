import toObject from "../../../algorithms/to-object.js";

import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
} from "../../../types/StaticJsPropertyDescriptor.js";

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

        const descObj = realm.types.object({
          enumerable: {
            enumerable: true,
            writable: true,
            configurable: true,
            value: realm.types.boolean(descriptor.enumerable ?? false),
          },
          configurable: {
            enumerable: true,
            writable: true,
            configurable: true,
            value: realm.types.boolean(descriptor.configurable ?? false),
          },
        });

        if (isStaticJsDataPropertyDescriptor(descriptor)) {
          yield* descObj.definePropertyEvaluator("value", {
            enumerable: true,
            writable: true,
            configurable: true,
            value: descriptor.value ?? realm.types.undefined,
          });
          yield* descObj.definePropertyEvaluator("writable", {
            enumerable: true,
            writable: true,
            configurable: true,
            value: realm.types.boolean(descriptor.writable ?? false),
          });
        } else if (isStaticJsAccessorPropertyDescriptor(descriptor)) {
          if (descriptor.get) {
            yield* descObj.definePropertyEvaluator("get", {
              enumerable: true,
              writable: true,
              configurable: true,
              value: descriptor.get,
            });
          }
          if (descriptor.set) {
            yield* descObj.definePropertyEvaluator("set", {
              enumerable: true,
              writable: true,
              configurable: true,
              value: descriptor.set,
            });
          }
        }

        yield* descriptorsObj.definePropertyEvaluator(key, {
          enumerable: true,
          writable: true,
          configurable: true,
          value: descObj,
        });
      }

      return descriptorsObj;
    },
  };

export default objectCtorGetOwnPropertyDescriptorsDeclaration;
