import { WhileStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import StaticJsLexicalEnvironment from "../../runtime/environments/implementation/StaticJsLexicalEnvironment.js";
import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { NormalCompletion } from "../completions/NormalCompletion.js";
import { isThrowCompletion } from "../completions/ThrowCompletion.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

import setupEnvironment from "./setup-environment.js";

function* whileStatementNodeEvaluator(
  node: WhileStatement,
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
    const testResult = yield* EvaluateNodeCommand(node.test, whileContext, {
      rethrow: true,
      forNormalValue: "WhileStatement.test",
    });

    if (!testResult.toBoolean()) {
      break;
    }

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
  }

  return NormalCompletion();
}

export default typedMerge(whileStatementNodeEvaluator, {
  environmentSetup: false,
});
