import type { IntrinsicPropertyDeclaration } from "../apply-intrinsic-properties.js";

const asyncGeneratorProtoSymbolToStringTagDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.toStringTag,
  value: (realm) => realm.types.string("AsyncGenerator"),
  writable: false,
  enumerable: false,
  configurable: true,
};

export default asyncGeneratorProtoSymbolToStringTagDeclaration;
