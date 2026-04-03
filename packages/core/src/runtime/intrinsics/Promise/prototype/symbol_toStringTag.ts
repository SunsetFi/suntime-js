import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const promiseProtoSymbolToStringTagDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.toStringTag,
  writable: false,
  enumerable: false,
  configurable: true,
  value: (realm) => realm.types.string("Promise"),
};

export default promiseProtoSymbolToStringTagDeclaration;
