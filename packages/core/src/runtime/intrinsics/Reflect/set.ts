import { Completion } from "../../../evaluator/completions/Completion.js";
import { Q } from "../../../evaluator/completions/Q.js";
import { isStaticJsObject } from "../../types/StaticJsObject.js";
import { toPropertyKey } from "../../utils/to-property-key.js";
import { IntrinsicPropertyDeclaration } from "../utils.js";

export const reflectSetDeclaration: IntrinsicPropertyDeclaration = {
  key: "set",
  length: 4,
  *func(
    realm,
    _thisArg,
    target = realm.types.undefined,
    propertyKey = realm.types.undefined,
    value = realm.types.undefined,
    receiver = target,
  ) {
    if (!isStaticJsObject(target)) {
      throw Completion.Throw("TypeError", "Reflect.set called on non-object");
    }

    const key = yield* toPropertyKey(propertyKey);

    const success = yield* Q(target.setEvaluator(key, value, receiver));
    return realm.types.boolean(success);
  },
};
