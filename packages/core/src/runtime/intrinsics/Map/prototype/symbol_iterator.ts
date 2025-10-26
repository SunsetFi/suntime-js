import StaticJsRuntimeError from "../../../../errors/StaticJsRuntimeError.js";

import { isStaticJsMap } from "../../../types/StaticJsMap.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const mapProtoSymbolIteratorDeclaration: IntrinsicPropertyDeclaration = {
  key(realm) {
    return realm.types.symbols.iterator;
  },
  *func(realm, thisArg) {
    if (!isStaticJsMap(thisArg)) {
      throw new StaticJsRuntimeError(
        realm.types.error(
          "TypeError",
          "Map.prototype[Symbol.iterator] called on incompatible receiver",
        ),
      );
    }

    return yield* thisArg.entriesEvaluator();
  },
};

export default mapProtoSymbolIteratorDeclaration;
