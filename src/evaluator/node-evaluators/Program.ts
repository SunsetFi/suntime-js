import { Program } from "@babel/types";

import EvaluationContext from "../EvaluationContext.js";
import { EvaluateNodeCommand } from "../commands/index.js";

import EvaluationResult from "../EvaluationResult.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

import setupEnvironment from "./setup-environment.js";

export default function* programNodeEvaluator(
  node: Program,
  context: EvaluationContext,
): EvaluationGenerator {
  for (const statement of node.body) {
    yield* setupEnvironment(statement, context);
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
