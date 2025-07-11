import type { ForStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import setupEnvironment from "./setup-environment.js";
import { ContinueCompletion } from "../completions/ContinueCompletion.js";
import { BreakCompletion } from "../completions/BreakCompletion.js";
import toBoolean from "../../runtime/algorithms/to-boolean.js";

function* forStatementNodeEvaluator(
  node: ForStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  let forContext = context;

  if (node.init || node.update || node.test) {
    forContext = context.createBlockContext(
      new StaticJsDeclarativeEnvironmentRecord(context.realm),
    );

    if (node.init) {
      yield* setupEnvironment(node.init, forContext);
    }

    if (node.test) {
      yield* setupEnvironment(node.test, forContext);
    }

    if (node.update) {
      yield* setupEnvironment(node.update, forContext);
    }

    if (node.init) {
      yield* EvaluateNodeCommand(node.init, forContext);
    }
  }

  do {
    if (node.test) {
      let testResult = yield* EvaluateNodeCommand(node.test, forContext, {
        forNormalValue: "ForStatement.test",
      });
      testResult = yield* toBoolean(testResult, context.realm);
      if (!testResult.value) {
        return null;
      }
    }

    const bodyContext = forContext.createBlockContext(
      new StaticJsDeclarativeEnvironmentRecord(context.realm),
    );

    yield* setupEnvironment(node.body, bodyContext);

    try {
      yield* EvaluateNodeCommand(node.body, bodyContext);
    } catch (e) {
      if (BreakCompletion.isBreakForLabel(e, context.label)) {
        return null;
      }

      if (ContinueCompletion.isContinueForLabel(e, context.label)) {
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
