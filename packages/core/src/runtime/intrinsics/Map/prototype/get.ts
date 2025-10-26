import StaticJsRuntimeError from "../../../../errors/StaticJsRuntimeError.js";

import { isStaticJsMap } from "../../../types/StaticJsMap.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const mapProtoGetDeclaration: IntrinsicPropertyDeclaration = {
  key: "get",
  *func(realm, thisArg, key) {
    if (!isStaticJsMap(thisArg)) {
      throw new StaticJsRuntimeError(
        realm.types.error(
          "TypeError",
          "Map.prototype.get called on incompatible receiver",
        ),
      );
    }

    return yield* thisArg.getEvaluator(key ?? realm.types.undefined);
  },
};

export default mapProtoGetDeclaration;
