import { Completion } from "../../../evaluator/completions/Completion.js";
import { Q } from "../../../evaluator/completions/Q.js";

import { isStaticJsObject } from "../../types/StaticJsObject.js";

import { IntrinsicPropertyDeclaration } from "../utils.js";

export const reflectPreventExtensionsDeclaration: IntrinsicPropertyDeclaration = {
  key: "preventExtensions",
  *func(realm, _thisArg, target = realm.types.undefined) {
    if (!isStaticJsObject(target)) {
      throw Completion.Throw("TypeError", "Reflect.preventExtensions called on non-object");
    }

    const prevented = yield* Q(target.preventExtensionsEvaluator());
    return realm.types.boolean(prevented);
  },
};
