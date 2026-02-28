import { Completion } from "../../../../evaluator/completions/Completion.js";
import generatorResumeAbrupt from "../../../algorithms/generator-resume-abrupt.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const generatorProtoThrowDeclaration: IntrinsicPropertyDeclaration = {
  key: "throw",
  *func(realm, thisArg, value = realm.types.undefined) {
    const completion = Completion.Throw(value);
    return yield* generatorResumeAbrupt(thisArg, completion, null, realm);
  },
};

export default generatorProtoThrowDeclaration;
