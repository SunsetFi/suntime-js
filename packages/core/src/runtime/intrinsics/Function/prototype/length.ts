import { IntrinsicPropertyDeclaration } from "../../utils.js";

export const functionProtoLengthDeclaration: IntrinsicPropertyDeclaration = {
  key: "length",
  value: (realm) => realm.types.zero,
};
