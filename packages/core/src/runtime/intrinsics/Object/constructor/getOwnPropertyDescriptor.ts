import { ReturnCompletion } from "../../../../evaluator/completions/ReturnCompletion.js";

import { isStaticJsNull } from "../../../types/interfaces/StaticJsNull.js";
import { isStaticJsScalar } from "../../../types/interfaces/StaticJsScalar.js";
import { isStaticJsUndefined } from "../../../types/interfaces/StaticJsUndefined.js";

import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
} from "../../../types/interfaces/StaticJsPropertyDescriptor.js";

import { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorGetOwnPropertyDescriptorDeclaration: IntrinsicPropertyDeclaration =
  {
    name: "getOwnPropertyDescriptor",
    *func(realm, _thisArg, objValue, propValue) {
      const obj = (objValue ?? realm.types.undefined).toObject();

      if (
        !propValue ||
        !isStaticJsScalar(propValue) ||
        isStaticJsNull(propValue) ||
        isStaticJsUndefined(propValue)
      ) {
        return ReturnCompletion(realm.types.undefined);
      }

      const descriptor = yield* obj.getOwnPropertyDescriptorEvaluator(
        propValue.toString(),
      );

      if (!descriptor) {
        return ReturnCompletion(realm.types.undefined);
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

      return ReturnCompletion(result);
    },
  };

export default objectCtorGetOwnPropertyDescriptorDeclaration;
