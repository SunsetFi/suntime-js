import type { IntrinsicPropertyDeclaration } from "../utils.js";

const reflectSymbolToStringTagDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.toStringTag,
  writable: false,
  enumerable: false,
  configurable: true,
  value: (realm) => realm.types.string("Reflect"),
};

export default reflectSymbolToStringTagDeclaration;
