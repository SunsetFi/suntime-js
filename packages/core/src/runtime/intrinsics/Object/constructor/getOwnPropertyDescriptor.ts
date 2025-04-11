import { NormalCompletion } from "../../../../evaluator/internal.js";
import {
  isStaticJsNull,
  isStaticJsScalar,
  isStaticJsUndefined,
} from "../../../types/index.js";
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
        return NormalCompletion(realm.types.undefined);
      }

      const descriptor = yield* obj.getOwnPropertyDescriptorEvaluator(
        propValue.toString(),
      );

      if (!descriptor) {
        return NormalCompletion(realm.types.undefined);
      }

      const result = realm.types.object({
        enumerable: {
          value: realm.types.boolean(descriptor.enumerable ?? false),
        },
        configurable: {
          value: realm.types.boolean(descriptor.configurable ?? false),
        },
      });

      if (isStaticJsAccessorPropertyDescriptor(descriptor)) {
        if (descriptor.get) {
          result.defineProperty("get", {
            value: descriptor.get,
            enumerable: true,
            writable: true,
            configurable: true,
          });
        }
        if (descriptor.set) {
          result.defineProperty("set", {
            value: descriptor.set,
            enumerable: true,
            writable: true,
            configurable: true,
          });
        }
      } else if (isStaticJsDataPropertyDescriptor(descriptor)) {
        result.defineProperty("value", {
          value: descriptor.value,
          enumerable: true,
          writable: true,
          configurable: true,
        });
        result.defineProperty("writable", {
          value: realm.types.boolean(descriptor.writable ?? false),
          enumerable: true,
          writable: true,
          configurable: true,
        });
      }

      return NormalCompletion(result);
    },
  };

export default objectCtorGetOwnPropertyDescriptorDeclaration;
