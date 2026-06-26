import { Completion } from "../../evaluator/completions/Completion.js";
import { Q } from "../../evaluator/completions/Q.js";
import { isStaticJsObject } from "../../types/StaticJsObject.js";
import type { IntrinsicPropertyDeclaration } from "../apply-intrinsic-properties.js";

export const reflectPreventExtensionsDeclaration: IntrinsicPropertyDeclaration = {
  key: "preventExtensions",
  length: 1,
  *func(realm, _thisArg, target = realm.types.undefined) {
    if (!isStaticJsObject(target)) {
      throw yield* Completion.Throw.create(
        "TypeError",
        "Reflect.preventExtensions called on non-object",
      );
    }

    const prevented = yield* Q(target.preventExtensionsEvaluator());
    return realm.types.boolean(prevented);
  },
};
