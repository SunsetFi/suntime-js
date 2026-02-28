import { Completion } from "../../../../evaluator/completions/Completion.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";
import { isStaticJsMap } from "../../../types/StaticJsMap.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const mapProtoForEachDeclaration: IntrinsicPropertyDeclaration = {
  key: "forEach",
  *func(realm, thisArg, callback, callbackThisArg) {
    if (!isStaticJsMap(thisArg)) {
      throw Completion.Throw(
        realm.types.error(
          "TypeError",
          "Map.prototype.forEach called on incompatible receiver",
        ),
      );
    }

    if (!isStaticJsFunction(callback)) {
      throw Completion.Throw(
        realm.types.error(
          "TypeError",
          "Callback provided to Map.prototype.forEach is not a function",
        ),
      );
    }

    yield* thisArg.forEachEvaluator(
      callback,
      callbackThisArg ?? realm.types.undefined,
    );
    return realm.types.undefined;
  },
};

export default mapProtoForEachDeclaration;
