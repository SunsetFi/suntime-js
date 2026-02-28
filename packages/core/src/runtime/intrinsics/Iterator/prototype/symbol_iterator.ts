import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const iteratorProtoSymbolIteratorDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.iterator,
  *func(realm, thisArg) {
    return thisArg;
  },
};

export default iteratorProtoSymbolIteratorDeclaration;
