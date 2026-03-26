import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const asyncGeneratorFunctionProtoSymbolToStringTagDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.toStringTag,
  value: (realm) => realm.types.string("AsyncGeneratorFunction"),
  writable: false,
  enumerable: false,
  configurable: true,
};

export default asyncGeneratorFunctionProtoSymbolToStringTagDeclaration;
