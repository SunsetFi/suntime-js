import StaticJsRuntimeError from "../../../../errors/StaticJsRuntimeError.js";

import { isStaticJsMap } from "../../../types/StaticJsMap.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const mapProtoKeysDeclaration: IntrinsicPropertyDeclaration = {
  key: "keys",
  *func(realm, thisArg) {
    if (!isStaticJsMap(thisArg)) {
      throw new StaticJsRuntimeError(
        realm.types.error(
          "TypeError",
          "Map.prototype.keys called on incompatible receiver",
        ),
      );
    }

    return yield* thisArg.keysEvaluator();
  },
};

export default mapProtoKeysDeclaration;
