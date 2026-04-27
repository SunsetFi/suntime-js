import { IntrinsicPropertyDeclaration } from "../../utils.js";

export const asyncFunctionProtoToStringTagDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.toStringTag,
  value: (realm) => realm.types.string("AsyncFunction"),
  writable: false,
  enumerable: false,
  configurable: true,
};
