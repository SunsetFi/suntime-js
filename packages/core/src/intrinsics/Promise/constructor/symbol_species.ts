import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

export const promiseConstructorSymbolSpeciesDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.species,
  *get(_realm, thisArg) {
    return thisArg;
  },
};
