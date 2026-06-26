import { generatorResume } from "../../../algorithms/generator-resume.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const iteratorHelperProtoNextDeclaration: IntrinsicPropertyDeclaration = {
  key: "next",
  *func(realm, thisArg) {
    return yield* generatorResume(thisArg, realm.types.undefined, "Iterator Helper", realm);
  },
};

export default iteratorHelperProtoNextDeclaration;
