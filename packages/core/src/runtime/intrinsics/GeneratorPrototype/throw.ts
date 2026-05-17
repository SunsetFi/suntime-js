import { Completion } from "../../../evaluator/completions/Completion.js";
import { generatorResumeAbrupt } from "../../algorithms/generator-resume-abrupt.js";
import type { IntrinsicPropertyDeclaration } from "../apply-intrinsic-properties.js";

const generatorProtoThrowDeclaration: IntrinsicPropertyDeclaration = {
  key: "throw",
  length: 1,
  *func(realm, thisArg, value = realm.types.undefined) {
    const completion = Completion.Throw(value);
    return yield* generatorResumeAbrupt(thisArg, completion, null);
  },
};

export default generatorProtoThrowDeclaration;
