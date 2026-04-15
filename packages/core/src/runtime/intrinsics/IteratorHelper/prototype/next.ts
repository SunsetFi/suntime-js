import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import generatorResume from "../../../algorithms/generator-resume.js";

const iteratorHelperProtoNextDeclaration: IntrinsicPropertyDeclaration = {
  key: "next",
  *func(realm, thisArg) {
    return yield* generatorResume(thisArg, realm.types.undefined, "Iterator Helper", realm);
  },
};

export default iteratorHelperProtoNextDeclaration;
