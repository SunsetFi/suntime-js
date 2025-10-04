import toString from "../../../algorithms/to-string.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const symbolConstructorForDeclaration: IntrinsicPropertyDeclaration = {
  key: "for",
  *func(realm, thisArg, keyArg) {
    const keyStringValue = yield* toString(
      keyArg ?? realm.types.undefined,
      realm,
    );
    const key = keyStringValue.value;

    let sym = realm.types.symbolRegistry.get(key);
    if (sym === undefined) {
      sym = realm.types.symbol(key);
      realm.types.symbolRegistry.set(key, sym);
    }

    return sym;
  },
};

export default symbolConstructorForDeclaration;
