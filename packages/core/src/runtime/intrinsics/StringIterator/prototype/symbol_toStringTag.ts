import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const stringIteratorProtoSymbolToStringTagDeclaration: IntrinsicPropertyDeclaration =
  {
    key: (realm) => realm.types.symbols.toStringTag,
    value: (realm) => realm.types.string("String Iterator"),
    writable: false,
    enumerable: false,
    configurable: true,
  };

export default stringIteratorProtoSymbolToStringTagDeclaration;
