import type { Program } from "@babel/types";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import typedMerge from "../../internal/typed-merge.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import setupEnvironment from "./setup-environment.js";
import { ControlFlowCompletion } from "../completions/ControlFlowCompletion.js";

function* programNodeEvaluator(
  node: Program,
  context: EvaluationContext,
): EvaluationGenerator {
  let lastResult: StaticJsValue | null = null;
  for (const statement of node.body) {
    try {
      lastResult = yield* EvaluateNodeCommand(statement, context);
    } catch (e) {
      ControlFlowCompletion.handleUnexpected(context.realm, e);
      throw e;
    }
  }

  return lastResult;
}

export default typedMerge(programNodeEvaluator, {
  environmentSetup: function* (node: Program, context: EvaluationContext) {
    for (const statement of node.body) {
      yield* setupEnvironment(statement, context);
    }

    return false;
  },
});
