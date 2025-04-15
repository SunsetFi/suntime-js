import { ForStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import StaticJsLexicalEnvironment from "../../runtime/environments/implementation/StaticJsLexicalEnvironment.js";
import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/index.js";
import { NormalCompletion } from "../completions/index.js";

import setupEnvironment from "./setup-environment.js";
import { isThrowCompletion } from "../completions/ThrowCompletion.js";

function* forStatementNodeEvaluator(
  node: ForStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  let forContext = context;

  if (node.init || node.update || node.test) {
    const forEnv = new StaticJsLexicalEnvironment(
      context.realm,
      new StaticJsDeclarativeEnvironmentRecord(context.realm),
      context.env,
    );

    forContext = {
      ...context,
      env: forEnv,
    };

    if (node.init) {
      const setupInitResult = yield* setupEnvironment(node.init, forContext);
      if (isThrowCompletion(setupInitResult)) {
        return setupInitResult;
      }
    }

    if (node.test) {
      const setupTestResult = yield* setupEnvironment(node.test, forContext);
      if (isThrowCompletion(setupTestResult)) {
        return setupTestResult;
      }
    }

    if (node.update) {
      const setupUpdateResult = yield* setupEnvironment(
        node.update,
        forContext,
      );
      if (isThrowCompletion(setupUpdateResult)) {
        return setupUpdateResult;
      }
    }
  }

  if (node.init) {
    yield* EvaluateNodeCommand(node.init, forContext);
  }

  do {
    if (node.test) {
      const testResult = yield* EvaluateNodeCommand(node.test, forContext, {
        rethrow: true,
        forNormalValue: "ForStatement.test",
      });

      if (!testResult.toBoolean()) {
        return NormalCompletion(null);
      }
    }

    const bodyEnv = new StaticJsLexicalEnvironment(
      context.realm,
      new StaticJsDeclarativeEnvironmentRecord(context.realm),
      forContext.env,
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

export default typedMerge(forStatementNodeEvaluator, {
  environmentSetup: false,
});
