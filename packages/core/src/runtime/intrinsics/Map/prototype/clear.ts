import StaticJsRuntimeError from "../../../../errors/StaticJsRuntimeError.js";

import { isStaticJsMap } from "../../../types/StaticJsMap.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const mapProtoClearDeclaration: IntrinsicPropertyDeclaration = {
  key: "clear",
  *func(realm, thisArg) {
    if (!isStaticJsMap(thisArg)) {
      throw new StaticJsRuntimeError(
        realm.types.error(
          "TypeError",
          "Map.prototype.clear called on incompatible receiver",
        ),
      );
    }

    yield* thisArg.clearEvaluator();
    return realm.types.undefined;
  },
};

export default mapProtoClearDeclaration;
