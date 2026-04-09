import { StaticJsSetImpl } from "../../../types/implementation/objects/StaticJsSetImpl.js";

import { isCallable } from "../../../algorithms/is-callable.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const setProtoForEachDeclaration: IntrinsicPropertyDeclaration = {
  key: "forEach",
  *func(
    realm,
    thisArg = realm.types.undefined,
    callback = realm.types.undefined,
    forEachThisArg = realm.types.undefined,
  ) {
    if (!(thisArg instanceof StaticJsSetImpl)) {
      throw realm.types.error("TypeError", "Not a Set");
    }

    if (!isCallable(callback)) {
      throw realm.types.error("TypeError", "Callback is not a function");
    }

    yield* thisArg.forEachEvaluator(callback, forEachThisArg);

    return realm.types.undefined;
  },
};

export default setProtoForEachDeclaration;
