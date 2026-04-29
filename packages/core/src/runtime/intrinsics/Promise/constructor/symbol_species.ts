import type { IntrinsicPropertyDeclaration } from "../../utils.js";

export const promiseConstructorSymbolSpeciesDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.species,
  *get(_realm, thisArg) {
    return thisArg;
  },
};
