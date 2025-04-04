import { ForStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import StaticJsLexicalEnvironment from "../../runtime/environments/implementation/StaticJsLexicalEnvironment.js";
import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";
import { StaticJsEnvironment } from "../../runtime/environments/index.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/index.js";
import { NormalCompletion } from "../completions/index.js";

import setupEnvironment from "./setup-environment.js";

function* forStatementNodeEvaluator(
  node: ForStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const forEnv =
    (node.extra?.environment as StaticJsEnvironment | undefined) ?? context.env;

  const forContext = {
    ...context,
    env: forEnv,
  };

  if (node.init) {
    yield* EvaluateNodeCommand(node.init, forContext);
  }

  do {
    if (node.test) {
      const testResultCompletion = yield* EvaluateNodeCommand(
        node.test,
        forContext,
      );
      if (testResultCompletion.type === "throw") {
        return testResultCompletion;
      }
      if (
        testResultCompletion.type !== "normal" ||
        !testResultCompletion.value
      ) {
        throw new Error(
          `Expected test result to be normal completion, but got ${testResultCompletion.type}`,
        );
      }

      if (!testResultCompletion.value.toBoolean()) {
        return NormalCompletion(null);
      }
    }

    const bodyEnv = new StaticJsLexicalEnvironment(
      context.realm,
      new StaticJsDeclarativeEnvironmentRecord(context.realm),
      forEnv,
    );

    const bodyContext = {
      ...forContext,
      env: bodyEnv,
    };

    yield* setupEnvironment(node.body, bodyContext);

    const result = yield* EvaluateNodeCommand(node.body, bodyContext);
    switch (result.type) {
      case "continue":
      case "break": {
        if (result.target !== null && result.target !== context.label) {
          // Not for us.  Pass it up
          return result;
        }

        // It was for us.  Break if that's what the request is.
        if (result.type === "break") {
          return NormalCompletion(null);
        }
        break;
      }
      case "return":
      case "throw":
        return result;
    }

    if (node.update) {
      yield* EvaluateNodeCommand(node.update, forContext);
    }
  } while (true);
}

function* forStatementEnvironmentSetup(
  node: ForStatement,
  context: EvaluationContext,
): EvaluationGenerator<boolean> {
  // Set up the environment for the for statement initializer.
  if (!node.init && !node.update && !node.test) {
    return false;
  }

  const forEnvironment = new StaticJsLexicalEnvironment(
    context.realm,
    new StaticJsDeclarativeEnvironmentRecord(context.realm),
    context.env,
  );
  node.extra = {
    ...node.extra,
    environment: forEnvironment,
  };

  const forContext: EvaluationContext = {
    ...context,
    env: forEnvironment,
  };

  if (node.init) {
    yield* setupEnvironment(node.init, forContext);
  }

  if (node.test) {
    yield* setupEnvironment(node.test, forContext);
  }

  if (node.update) {
    yield* setupEnvironment(node.update, forContext);
  }

  return false;
}

export default typedMerge(forStatementNodeEvaluator, {
  environmentSetup: forStatementEnvironmentSetup,
});
