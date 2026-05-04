import { IntrinsicPropertyDeclaration } from "../../utils.js";

export const errorProtoMessageDeclaration: IntrinsicPropertyDeclaration = {
  key: "message",
  value: (realm) => realm.types.string(""),
  writable: true,
  enumerable: false,
  configurable: true,
};
