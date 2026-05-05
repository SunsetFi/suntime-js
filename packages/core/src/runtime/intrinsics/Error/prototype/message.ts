import { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

export const errorProtoMessageDeclaration: IntrinsicPropertyDeclaration = {
  key: "message",
  value: (realm) => realm.types.string(""),
  writable: true,
  enumerable: false,
  configurable: true,
};
