import { IntrinsicPropertyDeclaration } from "../../utils.js";

export const errorProtoNameDeclaration: IntrinsicPropertyDeclaration = {
  key: "name",
  value: (realm) => realm.types.string("Error"),
  writable: true,
  enumerable: false,
  configurable: true,
};
