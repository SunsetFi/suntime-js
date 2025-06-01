import type { File } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import type EvaluationContext from "../EvaluationContext.js";

import type EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import setupEnvironment from "./setup-environment.js";

function* fileNodeEvaluator(
  node: File,
  context: EvaluationContext,
): EvaluationGenerator {
  yield* setupEnvironment(node.program, context);

  return yield* EvaluateNodeCommand(node.program, context);
}

export default typedMerge(fileNodeEvaluator, {
  environmentSetup: false,
});
