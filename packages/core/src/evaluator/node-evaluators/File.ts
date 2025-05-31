import { File } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import EvaluationContext from "../EvaluationContext.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import setupEnvironment from "./setup-environment.js";
import { isThrowCompletion } from "../completions/ThrowCompletion.js";

function* fileNodeEvaluator(
  node: File,
  context: EvaluationContext,
): EvaluationGenerator {
  const setupCompletion = yield* setupEnvironment(node.program, context);
  if (isThrowCompletion(setupCompletion)) {
    return setupCompletion;
  }

  return yield* EvaluateNodeCommand(node.program, context);
}

export default typedMerge(fileNodeEvaluator, {
  environmentSetup: false,
});
