import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayConstructorSymbolSpeciesDeclaration: IntrinsicPropertyDeclaration = {
  key: (_realm, symbols) => symbols.species,
  *get(_realm, thisArg) {
    return thisArg;
  },
};

export default arrayConstructorSymbolSpeciesDeclaration;
