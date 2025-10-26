import StaticJsRuntimeError from "../../../../errors/StaticJsRuntimeError.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";
import { isStaticJsMap } from "../../../types/StaticJsMap.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const mapProtoForEachDeclaration: IntrinsicPropertyDeclaration = {
  key: "forEach",
  *func(realm, thisArg, callback, callbackThisArg) {
    if (!isStaticJsMap(thisArg)) {
      throw new StaticJsRuntimeError(
        realm.types.error(
          "TypeError",
          "Map.prototype.forEach called on incompatible receiver",
        ),
      );
    }

    if (!isStaticJsFunction(callback)) {
      throw new StaticJsRuntimeError(
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
