import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsScalar } from "../../../types/StaticJsScalar.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";

import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
} from "../../../types/StaticJsPropertyDescriptor.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";
import toObject from "../../../algorithms/to-object.js";

const objectCtorGetOwnPropertyDescriptorDeclaration: IntrinsicPropertyDeclaration =
  {
    name: "getOwnPropertyDescriptor",
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

      const descriptor = yield* obj.getOwnPropertyDescriptorEvaluator(
        propValue.toString(),
      );

      if (!descriptor) {
        return realm.types.undefined;
      }

      const result = realm.types.object({
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

      if (isStaticJsAccessorPropertyDescriptor(descriptor)) {
        if (descriptor.get) {
          result.defineProperty("get", {
            enumerable: true,
            writable: true,
            configurable: true,
            value: descriptor.get,
          });
        }
        if (descriptor.set) {
          result.defineProperty("set", {
            enumerable: true,
            writable: true,
            configurable: true,
            value: descriptor.set,
          });
        }
      } else if (isStaticJsDataPropertyDescriptor(descriptor)) {
        result.defineProperty("value", {
          enumerable: true,
          writable: true,
          configurable: true,
          value: descriptor.value,
        });
        result.defineProperty("writable", {
          enumerable: true,
          writable: true,
          configurable: true,
          value: realm.types.boolean(descriptor.writable ?? false),
        });
      }

      return result;
    },
  };

export default objectCtorGetOwnPropertyDescriptorDeclaration;
