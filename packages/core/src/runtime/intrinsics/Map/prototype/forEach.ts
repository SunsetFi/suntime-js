import { Completion } from "../../../../evaluator/completions/Completion.js";
import { isCallable } from "../../../algorithms/is-callable.js";
import { isStaticJsMap } from "../../../types/StaticJsMap.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const mapProtoForEachDeclaration: IntrinsicPropertyDeclaration = {
  key: "forEach",
  *func(realm, thisArg, callback = realm.types.undefined, callbackThisArg = realm.types.undefined) {
    if (!isStaticJsMap(thisArg)) {
      throw Completion.Throw("TypeError", "Map.prototype.forEach called on incompatible receiver");
    }

    if (!isCallable(callback)) {
      throw Completion.Throw(
        "TypeError",
        "Callback provided to Map.prototype.forEach is not a function",
      );
    }

    yield* thisArg.forEachEvaluator(callback, callbackThisArg);
    return realm.types.undefined;
  },
};

export default mapProtoForEachDeclaration;
