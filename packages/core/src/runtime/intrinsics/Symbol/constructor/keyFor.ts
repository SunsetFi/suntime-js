import { isStaticJsSymbol } from "../../../types/index.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const symbolConstructorKeyForDeclaration: IntrinsicPropertyDeclaration = {
  name: "keyFor",
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

export default symbolConstructorKeyForDeclaration;
