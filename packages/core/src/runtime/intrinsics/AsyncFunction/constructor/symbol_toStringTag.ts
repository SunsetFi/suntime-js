import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const asyncFunctionProtoSymbolToStringTagDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.toStringTag,
  writable: false,
  enumerable: false,
  configurable: true,
  value: (realm) => realm.types.string("AsyncFunction"),
};

export default asyncFunctionProtoSymbolToStringTagDeclaration;
