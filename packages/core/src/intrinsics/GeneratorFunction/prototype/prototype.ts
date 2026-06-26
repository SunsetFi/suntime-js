import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const generatorProtoPrototypeDeclaration: IntrinsicPropertyDeclaration = {
  key: "prototype",
  value: (realm) => realm.intrinsics["GeneratorPrototype"],
};

export default generatorProtoPrototypeDeclaration;
