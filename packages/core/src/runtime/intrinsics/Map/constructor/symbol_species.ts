import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const mapCtorSymbolSpeciesDeclaration: IntrinsicPropertyDeclaration = {
  key(realm) {
    return realm.types.symbols.species;
  },
  enumerable: false,
  configurable: true,
  *get(_realm, thisArg) {
    return thisArg;
  },
};

export default mapCtorSymbolSpeciesDeclaration;
