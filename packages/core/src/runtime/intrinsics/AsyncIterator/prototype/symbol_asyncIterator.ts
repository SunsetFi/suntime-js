import { IntrinsicPropertyDeclaration } from "../../utils.js";

export const asyncIteratorProtoSymbolAsyncIteratorDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.asyncIterator,
  *func(_realm, thisArg) {
    return thisArg;
  },
};
