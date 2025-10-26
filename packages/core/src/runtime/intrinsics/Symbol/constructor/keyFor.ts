import { isStaticJsSymbol } from "../../../types/StaticJsSymbol.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const symbolCtorKeyForDeclaration: IntrinsicPropertyDeclaration = {
  key: "keyFor",
  *func(realm, thisArg, symbolArg) {
    if (!isStaticJsSymbol(symbolArg)) {
      return realm.types.undefined;
    }

    for (const [key, sym] of realm.types.symbolRegistry.entries()) {
      if (sym === symbolArg) {
        return realm.types.string(key);
      }
    }

    return realm.types.undefined;
  },
};

export default symbolCtorKeyForDeclaration;
