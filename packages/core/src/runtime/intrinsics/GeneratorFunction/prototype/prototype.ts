import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const generatorProtoPrototypeDeclaration: IntrinsicPropertyDeclaration = {
  key: "prototype",
  value: (realm) => realm.types.prototypes.generatorProto,
};

export default generatorProtoPrototypeDeclaration;
