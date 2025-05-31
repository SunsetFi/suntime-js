import { Program } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import EvaluationContext from "../EvaluationContext.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Completion, NormalCompletion } from "../completions/index.js";

import EvaluationGenerator from "../EvaluationGenerator.js";

import setupEnvironment from "./setup-environment.js";
import StaticJsEngineError from "../../errors/StaticJsEngineError.js";
import { isThrowCompletion } from "../completions/ThrowCompletion.js";

function* programNodeEvaluator(
  node: Program,
  context: EvaluationContext,
): EvaluationGenerator {
  let lastCompletion: Completion = NormalCompletion();
  for (const statement of node.body) {
    lastCompletion = yield* EvaluateNodeCommand(statement, context);
    switch (lastCompletion.type) {
      case "throw":
        return lastCompletion;
      case "return":
      case "break":
      case "continue":
        // TODO: Real error type
        throw new StaticJsEngineError(
          "Illegal control flow completion type in Program node.",
        );
    }
  }

  return lastCompletion;
}

export default typedMerge(programNodeEvaluator, {
  environmentSetup: function* (node: Program, context: EvaluationContext) {
    for (const statement of node.body) {
      const completion = yield* setupEnvironment(statement, context);
      if (isThrowCompletion(completion)) {
        return completion;
      }
    }

    return false;
  },
});
