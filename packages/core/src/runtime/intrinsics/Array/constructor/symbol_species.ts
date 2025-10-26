import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayCtorSymbolSpeciesDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.species,
  *get(_realm, thisArg) {
    return thisArg;
  },
};

export default arrayCtorSymbolSpeciesDeclaration;
