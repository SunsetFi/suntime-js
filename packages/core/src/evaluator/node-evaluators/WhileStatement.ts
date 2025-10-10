import type { WhileStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import toBoolean from "../../runtime/algorithms/to-boolean.js";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { BreakCompletion } from "../completions/BreakCompletion.js";
import { ContinueCompletion } from "../completions/ContinueCompletion.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import setupEnvironment from "./setup-environment.js";

function* whileStatementNodeEvaluator(
  node: WhileStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const whileContext = context.createLexicalEnvContext(
    new StaticJsDeclarativeEnvironmentRecord(context.realm),
  );

  let lastResult: StaticJsValue | null = null;
  while (true) {
    let testResult = yield* EvaluateNodeCommand(node.test, whileContext, {
      forNormalValue: "WhileStatement.test",
    });
    testResult = yield* toBoolean(testResult, context.realm);

    if (!testResult.value) {
      break;
    }

    const bodyContext = whileContext.createLexicalEnvContext(
      new StaticJsDeclarativeEnvironmentRecord(context.realm),
    );

    yield* setupEnvironment(node.body, bodyContext);

    try {
      lastResult = yield* EvaluateNodeCommand(node.body, bodyContext);
    } catch (e) {
      if (BreakCompletion.isBreakForLabel(e, context.label)) {
        break;
      }

      if (ContinueCompletion.isContinueForLabel(e, context.label)) {
        continue;
      }

      throw e;
    }
  }

  return lastResult;
}

export default typedMerge(whileStatementNodeEvaluator, {
  environmentSetup: false,
});
