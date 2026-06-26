import { isCallable } from "../../../../algorithms/is-callable.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import { isStaticJsMap } from "../../../types/StaticJsMap.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const mapProtoForEachDeclaration: IntrinsicPropertyDeclaration = {
  key: "forEach",
  length: 1,
  *func(realm, thisArg, callback = realm.types.undefined, callbackThisArg = realm.types.undefined) {
    if (!isStaticJsMap(thisArg)) {
      throw yield* Completion.Throw.create(
        "TypeError",
        "Map.prototype.forEach called on incompatible receiver",
      );
    }

    if (!isCallable(callback)) {
      throw yield* Completion.Throw.create(
        "TypeError",
        "Callback provided to Map.prototype.forEach is not a function",
      );
    }

    yield* thisArg.forEachEvaluator(callback, callbackThisArg);
    return realm.types.undefined;
  },
};

export default mapProtoForEachDeclaration;
