import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const iteratorHelperProtoSymbolToStringTagDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.toStringTag,
  value: (realm) => realm.types.string("Iterator Helper"),
  writable: false,
  enumerable: false,
  configurable: true,
};

export default iteratorHelperProtoSymbolToStringTagDeclaration;
