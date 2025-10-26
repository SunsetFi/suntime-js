import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const setCtorSymbolSpeciesDeclaration: IntrinsicPropertyDeclaration = {
  key(realm) {
    return realm.types.symbols.species;
  },
  enumerable: false,
  configurable: true,
  *get(_realm, thisArg) {
    return thisArg;
  },
};

export default setCtorSymbolSpeciesDeclaration;
