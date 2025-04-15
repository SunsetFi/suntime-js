import { DoWhileStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import StaticJsLexicalEnvironment from "../../runtime/environments/implementation/StaticJsLexicalEnvironment.js";
import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeCommand } from "../commands/index.js";

import { NormalCompletion } from "../completions/index.js";

import setupEnvironment from "./setup-environment.js";
import { isThrowCompletion } from "../completions/ThrowCompletion.js";

function* doWhileStatementNodeEvaluator(
  node: DoWhileStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const whileEnv = new StaticJsLexicalEnvironment(
    context.realm,
    new StaticJsDeclarativeEnvironmentRecord(context.realm),
    context.env,
  );

  const whileContext = {
    ...context,
    env: whileEnv,
  };

  while (true) {
    const bodyEnv = new StaticJsLexicalEnvironment(
      context.realm,
      new StaticJsDeclarativeEnvironmentRecord(context.realm),
      whileEnv,
    );

    const bodyContext = {
      ...whileContext,
      env: bodyEnv,
    };

    const setupBodyCompletion = yield* setupEnvironment(node.body, bodyContext);
    if (isThrowCompletion(setupBodyCompletion)) {
      return setupBodyCompletion;
    }

    const bodyResult = yield* EvaluateNodeCommand(node.body, bodyContext);

    if (
      bodyResult.type === "break" &&
      (!bodyResult.target || bodyResult.target === context.label)
    ) {
      break;
    }

    if (
      bodyResult.type === "continue" &&
      (!bodyResult.target || bodyResult.target === context.label)
    ) {
      continue;
    }

    switch (bodyResult.type) {
      case "return":
      case "throw":
      case "break":
      case "continue":
        return bodyResult;
    }

    const testResult = yield* EvaluateNodeCommand(node.test, whileContext, {
      rethrow: true,
      forNormalValue: "DoWhileStatement.test",
    });
    if (!testResult.toBoolean()) {
      break;
    }
  }

  return NormalCompletion(null);
}

export default typedMerge(doWhileStatementNodeEvaluator, {
  environmentSetup: false,
});
