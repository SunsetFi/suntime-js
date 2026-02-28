import generatorResume from "../../../algorithms/generator-resume.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const stringIteratorProtoNextDeclaration: IntrinsicPropertyDeclaration = {
  key: "next",
  *func(realm, thisArg) {
    return yield* generatorResume(
      thisArg,
      realm.types.undefined,
      "%StringIteratorPrototype%",
      realm,
    );
  },
};

export default stringIteratorProtoNextDeclaration;
