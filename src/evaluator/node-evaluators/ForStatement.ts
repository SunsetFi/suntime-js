import { ForStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import StaticJsLexicalEnvironment from "../../runtime/environments/implementation/StaticJsLexicalEnvironment.js";
import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";
import { StaticJsEnvironment } from "../../runtime/environments/index.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

import {
  EvaluateNodeAssertValueCommand,
  EvaluateNodeCommand,
} from "../commands/index.js";
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
      const testResult = yield* EvaluateNodeAssertValueCommand(
        node.test,
        forContext,
      );
      if (!testResult.toBoolean()) {
        return NormalCompletion();
      }
    }

    const bodyEnv = new StaticJsLexicalEnvironment(
      new StaticJsDeclarativeEnvironmentRecord(),
      forEnv,
    );

    const bodyContext = {
      ...forContext,
      env: bodyEnv,
    };

    setupEnvironment(node.body, bodyContext);

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
          return NormalCompletion();
        }
      }
    }

    if (node.update) {
      yield* EvaluateNodeCommand(node.update, forContext);
    }
  } while (true);
}

function forStatementEnvironmentSetup(
  node: ForStatement,
  context: EvaluationContext,
) {
  // Set up the environment for the for statement initializer.
  if (!node.init && !node.update && !node.test) {
    return false;
  }

  const forEnvironment = new StaticJsLexicalEnvironment(
    new StaticJsDeclarativeEnvironmentRecord(),
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
    setupEnvironment(node.init, forContext);
  }

  if (node.test) {
    setupEnvironment(node.test, forContext);
  }

  if (node.update) {
    setupEnvironment(node.update, forContext);
  }

  return false;
}

export default typedMerge(forStatementNodeEvaluator, {
  environmentSetup: forStatementEnvironmentSetup,
});
