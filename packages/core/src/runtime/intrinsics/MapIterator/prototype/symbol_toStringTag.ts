import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

export const mapIteratorProtoSymbolToStringTagDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.toStringTag,
  value: (realm) => realm.types.string("Map Iterator"),
  writable: false,
  enumerable: false,
  configurable: true,
};
