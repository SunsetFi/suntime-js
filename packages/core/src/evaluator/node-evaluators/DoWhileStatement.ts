import type { DoWhileStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import StaticJsLexicalEnvironment from "../../runtime/environments/implementation/StaticJsLexicalEnvironment.js";
import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { BreakCompletion } from "../completions/BreakCompletion.js";
import { ContinueCompletion } from "../completions/ContinueCompletion.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import setupEnvironment from "./setup-environment.js";
import toBoolean from "../../runtime/algorithms/to-boolean.js";

function* doWhileStatementNodeEvaluator(
  node: DoWhileStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const whileEnv = new StaticJsLexicalEnvironment(
    context.realm,
    new StaticJsDeclarativeEnvironmentRecord(context.realm),
    context.env,
  );

  const whileContext = context.createBlockContext(whileEnv);

  while (true) {
    const bodyEnv = new StaticJsLexicalEnvironment(
      context.realm,
      new StaticJsDeclarativeEnvironmentRecord(context.realm),
      context.env,
    );

    const bodyContext = whileContext.createBlockContext(bodyEnv);

    yield* setupEnvironment(node.body, bodyContext);

    try {
      yield* EvaluateNodeCommand(node.body, bodyContext);
    } catch (e) {
      if (BreakCompletion.isBreakForLabel(e, context.label)) {
        break;
      }

      if (ContinueCompletion.isContinueForLabel(e, context.label)) {
        continue;
      }

      throw e;
    }

    let testResult = yield* EvaluateNodeCommand(node.test, whileContext, {
      forNormalValue: "DoWhileStatement.test",
    });
    testResult = yield* toBoolean(testResult, whileContext.realm);
    if (!testResult.value) {
      break;
    }
  }

  return null;
}

export default typedMerge(doWhileStatementNodeEvaluator, {
  environmentSetup: false,
});
