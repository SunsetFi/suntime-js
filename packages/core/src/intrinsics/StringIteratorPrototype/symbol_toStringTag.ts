import type { IntrinsicPropertyDeclaration } from "../apply-intrinsic-properties.js";

const stringIteratorProtoSymbolToStringTagDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.toStringTag,
  value: (realm) => realm.types.string("String Iterator"),
  writable: false,
  enumerable: false,
  configurable: true,
};

export default stringIteratorProtoSymbolToStringTagDeclaration;
