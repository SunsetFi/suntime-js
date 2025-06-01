import type { Program } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import typedMerge from "../../internal/typed-merge.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import setupEnvironment from "./setup-environment.js";
import { ThrowCompletion } from "../completions/ThrowCompletion.js";
import { AbnormalCompletion } from "../completions/AbnormalCompletion.js";

function* programNodeEvaluator(
  node: Program,
  context: EvaluationContext,
): EvaluationGenerator {
  let lastResult: StaticJsValue | null = null;
  for (const statement of node.body) {
    try {
      lastResult = yield* EvaluateNodeCommand(statement, context);
    } catch (e) {
      if (e instanceof ThrowCompletion) {
        throw e;
      }

      if (e instanceof AbnormalCompletion) {
        // FIXME: What is the real error? SyntaxError?
        throw new StaticJsEngineError(
          "Illegal control flow completion type in Program node.",
        );
      }
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
