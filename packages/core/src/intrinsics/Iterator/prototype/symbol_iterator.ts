import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const iteratorProtoSymbolIteratorDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.iterator,
  *func(_realm, thisArg) {
    return thisArg;
  },
};

export default iteratorProtoSymbolIteratorDeclaration;
