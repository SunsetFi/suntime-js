import { IntrinsicPropertyDeclaration } from "../apply-intrinsic-properties.js";

export const asyncIteratorProtoSymbolAsyncIteratorDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.asyncIterator,
  *func(_realm, thisArg) {
    return thisArg;
  },
};
