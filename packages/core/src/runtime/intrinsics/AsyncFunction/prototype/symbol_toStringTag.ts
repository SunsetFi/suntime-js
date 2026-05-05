import { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

export const asyncFunctionProtoToStringTagDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.toStringTag,
  value: (realm) => realm.types.string("AsyncFunction"),
  writable: false,
  enumerable: false,
  configurable: true,
};
