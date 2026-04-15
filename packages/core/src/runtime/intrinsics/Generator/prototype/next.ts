import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { generatorResume } from "../../../algorithms/generator-resume.js";

const generatorProtoNextDeclaration: IntrinsicPropertyDeclaration = {
  key: "next",
  *func(realm, thisArg, value = realm.types.undefined) {
    return yield* generatorResume(thisArg, value, null, realm);
  },
};

export default generatorProtoNextDeclaration;
