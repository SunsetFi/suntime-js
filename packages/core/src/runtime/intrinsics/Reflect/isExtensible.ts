import { Completion } from "../../../evaluator/completions/Completion.js";
import { Q } from "../../../evaluator/completions/Q.js";
import { isStaticJsObject } from "../../types/StaticJsObject.js";
import { IntrinsicPropertyDeclaration } from "../utils.js";

export const reflectIsExtensibleDeclaration: IntrinsicPropertyDeclaration = {
  key: "isExtensible",
  length: 1,
  *func(realm, _thisArg, target = realm.types.undefined) {
    if (!isStaticJsObject(target)) {
      throw Completion.Throw("TypeError", "Reflect.isExtensible called on non-object");
    }

    const isExtensible = yield* Q(target.isExtensibleEvaluator());
    return realm.types.boolean(isExtensible);
  },
};
