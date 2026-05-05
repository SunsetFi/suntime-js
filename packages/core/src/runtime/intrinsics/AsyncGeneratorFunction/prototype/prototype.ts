import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

export const asyncGeneratorFunctionProtoPrototypeDeclaration: IntrinsicPropertyDeclaration = {
  key: "prototype",
  value: (realm) => realm.types.prototypes.asyncGeneratorProto,
  configurable: true,
};
