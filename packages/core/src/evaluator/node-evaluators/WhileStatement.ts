import type { WhileStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import toBoolean from "../../runtime/algorithms/to-boolean.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { BreakCompletion } from "../completions/BreakCompletion.js";
import { ContinueCompletion } from "../completions/ContinueCompletion.js";
import type { NormalCompletion } from "../completions/NormalCompletion.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import setupEnvironment from "./setup-environment.js";

function* whileStatementNodeEvaluator(
  node: WhileStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const whileContext = context.createLexicalEnvContext(
    StaticJsDeclarativeEnvironmentRecord.from(context),
  );

  let lastCompletion: NormalCompletion = null;
  while (true) {
    const testResult = yield* EvaluateNodeCommand(node.test, whileContext, {
      forNormalValue: "WhileStatement.test",
    });
    const condition = yield* toBoolean.js(testResult, context.realm);

    if (!condition) {
      break;
    }

    const bodyContext = whileContext.createLexicalEnvContext(
      StaticJsDeclarativeEnvironmentRecord.from(context),
    );

    yield* setupEnvironment(node.body, bodyContext);

    try {
      lastCompletion = yield* EvaluateNodeCommand(node.body, bodyContext);
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

  return lastCompletion;
}

export default typedMerge(whileStatementNodeEvaluator, {
  environmentSetup: false,
});
