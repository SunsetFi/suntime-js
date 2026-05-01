import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const asyncGeneratorProtoPrototypeDeclaration: IntrinsicPropertyDeclaration = {
  key: "prototype",
  value: (realm) => realm.types.prototypes.asyncGeneratorProto,
  configurable: true,
};

export default asyncGeneratorProtoPrototypeDeclaration;
