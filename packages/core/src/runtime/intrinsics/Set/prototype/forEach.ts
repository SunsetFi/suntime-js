import StaticJsSetImpl from "../../../types/implementation/StaticJsSetImpl.js";
import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const setProtoForEachDeclaration: IntrinsicPropertyDeclaration = {
  key: "forEach",
  *func(realm, thisArg, callback, forEachThisArg) {
    if (!(thisArg instanceof StaticJsSetImpl)) {
      throw realm.types.error("TypeError", "Not a Set");
    }

    if (!isStaticJsFunction(callback)) {
      throw realm.types.error("TypeError", "Callback is not a function");
    }

    yield* thisArg.forEachEvaluator(callback, forEachThisArg);

    return realm.types.undefined;
  },
};

export default setProtoForEachDeclaration;
