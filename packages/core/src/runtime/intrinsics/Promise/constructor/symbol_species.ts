import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const promiseConstructorSymbolSpeciesDeclaration: IntrinsicPropertyDeclaration =
  {
    key: (_realm, symbols) => symbols.species,
    *get(_realm, thisArg) {
      return thisArg;
    },
  };

export default promiseConstructorSymbolSpeciesDeclaration;
