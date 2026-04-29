import { IntrinsicPropertyDeclaration } from "../../utils.js";

export const booleanProtoToStringTagDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.toStringTag,
  value: (realm) => realm.types.string("Boolean"),
  writable: false,
  enumerable: false,
  configurable: true,
};
