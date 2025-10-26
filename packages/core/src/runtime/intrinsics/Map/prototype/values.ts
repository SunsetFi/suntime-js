import StaticJsRuntimeError from "../../../../errors/StaticJsRuntimeError.js";

import { isStaticJsMap } from "../../../types/StaticJsMap.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const mapProtoValuesDeclaration: IntrinsicPropertyDeclaration = {
  key: "values",
  *func(realm, thisArg) {
    if (!isStaticJsMap(thisArg)) {
      throw new StaticJsRuntimeError(
        realm.types.error(
          "TypeError",
          "Map.prototype.values called on incompatible receiver",
        ),
      );
    }

    return yield* thisArg.valuesEvaluator();
  },
};

export default mapProtoValuesDeclaration;
