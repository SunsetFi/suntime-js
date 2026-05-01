import { Completion } from "../../../evaluator/completions/Completion.js";
import { Q } from "../../../evaluator/completions/Q.js";
import { isStaticJsObject } from "../../types/StaticJsObject.js";
import { toPropertyKey } from "../../utils/to-property-key.js";
import { IntrinsicPropertyDeclaration } from "../utils.js";

export const reflectHasDeclaration: IntrinsicPropertyDeclaration = {
  key: "has",
  length: 2,
  *func(realm, _thisArg, target = realm.types.undefined, propertyKey = realm.types.undefined) {
    if (!isStaticJsObject(target)) {
      throw Completion.Throw("TypeError", "Reflect.has called on non-object");
    }

    const key = yield* toPropertyKey(propertyKey);
    const hasProperty = yield* Q(target.hasOwnPropertyEvaluator(key));
    return realm.types.boolean(hasProperty);
  },
};
