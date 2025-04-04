import { DoWhileStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import StaticJsLexicalEnvironment from "../../runtime/environments/implementation/StaticJsLexicalEnvironment.js";
import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";
import StaticJsEnvironment from "../../runtime/environments/interfaces/StaticJsEnvironment.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeCommand } from "../commands/index.js";

import { NormalCompletion } from "../completions/index.js";

import setupEnvironment from "./setup-environment.js";

function* doWhileStatementNodeEvaluator(
  node: DoWhileStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const whileEnv =
    (node.extra?.environment as StaticJsEnvironment | undefined) ?? context.env;

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

    yield* setupEnvironment(node.body, bodyContext);

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

    const testResultCompletion = yield* EvaluateNodeCommand(
      node.test,
      whileContext,
    );
    if (testResultCompletion.type === "throw") {
      return testResultCompletion;
    }
    if (testResultCompletion.type !== "normal" || !testResultCompletion.value) {
      throw new Error(
        `Expected normal completion, got ${testResultCompletion.type}`,
      );
    }

    if (!testResultCompletion.value.toBoolean()) {
      break;
    }
  }

  return NormalCompletion(null);
}

function* doWhileStatementEnvironmentSetup(
  node: DoWhileStatement,
  context: EvaluationContext,
): EvaluationGenerator<boolean> {
  const env = new StaticJsLexicalEnvironment(
    context.realm,
    new StaticJsDeclarativeEnvironmentRecord(context.realm),
    context.env,
  );
  node.extra = {
    ...node.extra,
    environment: env,
  };

  return false;
}

export default typedMerge(doWhileStatementNodeEvaluator, {
  environmentSetup: doWhileStatementEnvironmentSetup,
});
