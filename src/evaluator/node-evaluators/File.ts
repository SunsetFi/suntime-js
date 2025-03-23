import { File } from "@babel/types";

import EvaluationContext from "../EvaluationContext.js";

import setupEnvironment from "./setup-environment.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeCommand } from "../commands/index.js";

export default function* fileNodeEvaluator(
  node: File,
  context: EvaluationContext,
): EvaluationGenerator {
  yield* setupEnvironment(node.program, context);

  return yield* EvaluateNodeCommand(node.program, context);
}
