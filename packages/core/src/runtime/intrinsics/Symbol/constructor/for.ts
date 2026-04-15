import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { toString } from "../../../algorithms/to-string.js";

const symbolCtorForDeclaration: IntrinsicPropertyDeclaration = {
  key: "for",
  *func(realm, _thisArg, keyArg = realm.types.undefined) {
    const keyStringValue = yield* toString(keyArg);
    const key = keyStringValue.value;

    let sym = realm.types.symbolRegistry.get(key);
    if (sym === undefined) {
      sym = realm.types.symbol(key);
      realm.types.symbolRegistry.set(key, sym);
    }

    return sym;
  },
};

export default symbolCtorForDeclaration;
