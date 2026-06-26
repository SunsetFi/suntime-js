import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

export const asyncGeneratorFunctionProtoSymbolToStringTagDeclaration: IntrinsicPropertyDeclaration =
  {
    key: (realm) => realm.types.symbols.toStringTag,
    value: (realm) => realm.types.string("AsyncGeneratorFunction"),
    writable: false,
    enumerable: false,
    configurable: true,
  };
