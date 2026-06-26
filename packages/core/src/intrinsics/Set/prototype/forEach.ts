import { isCallable } from "../../../algorithms/is-callable.js";
import { StaticJsSetImpl } from "../../../types/implementation/objects/StaticJsSetImpl.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const setProtoForEachDeclaration: IntrinsicPropertyDeclaration = {
  key: "forEach",
  length: 1,
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
