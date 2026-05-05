import { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

export const functionProtoLengthDeclaration: IntrinsicPropertyDeclaration = {
  key: "length",
  value: (realm) => realm.types.zero,
};
