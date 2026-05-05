import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const arrayProtoSymbolToStringTagDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.toStringTag,
  value: (realm) => realm.types.string("Array Iterator"),
  writable: false,
  enumerable: false,
  configurable: true,
};

export default arrayProtoSymbolToStringTagDeclaration;
