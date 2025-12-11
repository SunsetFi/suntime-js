import StaticJsRuntimeError from "../../../../errors/StaticJsRuntimeError.js";

import { isStaticJsMap } from "../../../types/StaticJsMap.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const mapProtoHasDeclaration: IntrinsicPropertyDeclaration = {
  key: "has",
  *func(realm, thisArg, key) {
    if (!isStaticJsMap(thisArg)) {
      throw new StaticJsRuntimeError(
        realm.types.error(
          "TypeError",
          "Map.prototype.get called on incompatible receiver",
        ),
      );
    }

    const hasValue = yield* thisArg.hasEvaluator(key ?? realm.types.undefined);
    return realm.types.boolean(hasValue);
  },
};

export default mapProtoHasDeclaration;
