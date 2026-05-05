import { Completion } from "../../../evaluator/completions/Completion.js";
import { generatorResumeAbrupt } from "../../algorithms/generator-resume-abrupt.js";
import type { IntrinsicPropertyDeclaration } from "../apply-intrinsic-properties.js";

const generatorProtoReturnDeclaration: IntrinsicPropertyDeclaration = {
  key: "return",
  length: 1,
  *func(realm, thisArg, value = realm.types.undefined) {
    const completion = Completion.Return(value);
    return yield* generatorResumeAbrupt(thisArg, completion, null, realm);
  },
};

export default generatorProtoReturnDeclaration;
