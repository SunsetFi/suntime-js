import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayConstructorSymbolSpeciesDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.species,
  *get(_realm, thisArg) {
    return thisArg;
  },
};

export default arrayConstructorSymbolSpeciesDeclaration;
