import { Program } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import EvaluationContext from "../EvaluationContext.js";
import { EvaluateNodeCommand } from "../commands/index.js";

import EvaluationResult from "../EvaluationResult.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

import setupEnvironment from "./setup-environment.js";

function* programNodeEvaluator(
  node: Program,
  context: EvaluationContext,
): EvaluationGenerator {
  for (const statement of node.body) {
    setupEnvironment(statement, context);
  }

  if (node.sourceType !== "script") {
    throw new Error("Only script source types are supported.");
  }

  let lastResult: EvaluationResult = null;
  for (const statement of node.body) {
    lastResult = yield* EvaluateNodeCommand(statement, context);
  }

  return lastResult;
}

export default typedMerge(programNodeEvaluator, {
  environmentSetup: () => false,
});
