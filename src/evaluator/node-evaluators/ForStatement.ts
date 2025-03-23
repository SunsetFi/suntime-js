import { ForStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import StaticJsLexicalEnvironment from "../../runtime/environments/implementation/StaticJsLexicalEnvironment.js";
import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import { StaticJsEnvironment } from "../../runtime/index.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";
import { BreakEvaluationResult } from "../EvaluationResult.js";

import {
  EvaluateNodeAssertValueCommand,
  EvaluateNodeCommand,
} from "../commands/index.js";

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
        break;
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

    if (result === BreakEvaluationResult) {
      break;
    }

    if (node.update) {
      yield* EvaluateNodeCommand(node.update, forContext);
    }
  } while (true);

  return null;
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
