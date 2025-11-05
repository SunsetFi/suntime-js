import type { DoWhileStatement } from "@babel/types";

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

function* doWhileStatementNodeEvaluator(
  node: DoWhileStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const whileContext = context.createLexicalEnvContext(
    new StaticJsDeclarativeEnvironmentRecord(context.realm),
  );

  let lastResult: StaticJsValue | null = null;
  while (true) {
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
        // Flow through to the test.
      } else {
        throw e;
      }
    }

    const testResult = yield* EvaluateNodeCommand(node.test, whileContext, {
      forNormalValue: "DoWhileStatement.test",
    });
    const condition = yield* toBoolean.js(testResult, whileContext.realm);
    if (!condition) {
      break;
    }
  }

  return lastResult;
}

export default typedMerge(doWhileStatementNodeEvaluator, {
  environmentSetup: false,
});
