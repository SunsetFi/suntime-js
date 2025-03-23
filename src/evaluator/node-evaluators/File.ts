import { File } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import EvaluationContext from "../EvaluationContext.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeCommand } from "../commands/index.js";

import setupEnvironment from "./setup-environment.js";

function* fileNodeEvaluator(
  node: File,
  context: EvaluationContext,
): EvaluationGenerator {
  setupEnvironment(node.program, context);

  return yield* EvaluateNodeCommand(node.program, context);
}

export default typedMerge(fileNodeEvaluator, {
  environmentSetup: () => false,
});
