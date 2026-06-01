import { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

export const aggregateErrorProtoMessageDeclaration: IntrinsicPropertyDeclaration = {
  key: "message",
  value: (realm) => realm.types.string(""),
  writable: true,
  enumerable: false,
  configurable: true,
};
