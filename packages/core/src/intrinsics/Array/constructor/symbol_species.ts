import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const arrayCtorSymbolSpeciesDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.species,
  *get(_realm, thisArg) {
    return thisArg;
  },
};

export default arrayCtorSymbolSpeciesDeclaration;
