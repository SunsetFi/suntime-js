import type { ForStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import StaticJsLexicalEnvironment from "../../runtime/environments/implementation/StaticJsLexicalEnvironment.js";
import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import setupEnvironment from "./setup-environment.js";
import { ContinueCompletion } from "../completions/ContinueCompletion.js";
import { BreakCompletion } from "../completions/BreakCompletion.js";

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
      yield* setupEnvironment(node.init, forContext);
    }

    if (node.test) {
      yield* setupEnvironment(node.test, forContext);
    }

    if (node.update) {
      yield* setupEnvironment(node.update, forContext);
    }
  }

  if (node.init) {
    yield* EvaluateNodeCommand(node.init, forContext);
  }

  do {
    if (node.test) {
      const testResult = yield* EvaluateNodeCommand(node.test, forContext, {
        forNormalValue: "ForStatement.test",
      });

      if (!testResult.toBoolean()) {
        return null;
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

    try {
      yield* EvaluateNodeCommand(node.body, bodyContext);
    } catch (e) {
      if (
        e instanceof BreakCompletion &&
        (e.target === null || e.target === context.label)
      ) {
        // Break is for us, so we stop the loop and return null
        return null;
      }

      if (
        e instanceof ContinueCompletion &&
        (e.target === null || e.target === context.label)
      ) {
        /* No-op, continue to the next iteration */
      } else {
        throw e; // Rethrow any other error
      }
    }

    if (node.update) {
      yield* EvaluateNodeCommand(node.update, forContext);
    }
  } while (true);
}

export default typedMerge(forStatementNodeEvaluator, {
  environmentSetup: false,
});
