import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const generatorFunctionProtoSymbolToStringTagDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.toStringTag,
  value: (realm) => realm.types.string("GeneratorFunction"),
  writable: false,
  enumerable: false,
  configurable: true,
};

export default generatorFunctionProtoSymbolToStringTagDeclaration;
