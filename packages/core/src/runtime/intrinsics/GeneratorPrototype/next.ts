import { generatorResume } from "../../algorithms/generator-resume.js";
import type { IntrinsicPropertyDeclaration } from "../apply-intrinsic-properties.js";

const generatorProtoNextDeclaration: IntrinsicPropertyDeclaration = {
  key: "next",
  length: 1,
  *func(realm, thisArg, value = realm.types.undefined) {
    return yield* generatorResume(thisArg, value, null, realm);
  },
};

export default generatorProtoNextDeclaration;
