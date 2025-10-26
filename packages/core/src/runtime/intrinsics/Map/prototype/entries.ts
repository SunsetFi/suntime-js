import StaticJsRuntimeError from "../../../../errors/StaticJsRuntimeError.js";

import { isStaticJsMap } from "../../../types/StaticJsMap.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const mapProtoEntriesDeclaration: IntrinsicPropertyDeclaration = {
  key: "entries",
  *func(realm, thisArg) {
    if (!isStaticJsMap(thisArg)) {
      throw new StaticJsRuntimeError(
        realm.types.error(
          "TypeError",
          "Map.prototype.entries called on incompatible receiver",
        ),
      );
    }

    return yield* thisArg.entriesEvaluator();
  },
};

export default mapProtoEntriesDeclaration;
