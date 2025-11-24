import type { ForStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import toBoolean from "../../runtime/algorithms/to-boolean.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { ContinueCompletion } from "../completions/ContinueCompletion.js";
import { BreakCompletion } from "../completions/BreakCompletion.js";
import type { NormalCompletion } from "../completions/NormalCompletion.js";

import setupEnvironment from "./setup-environment.js";

function* forStatementNodeEvaluator(
  node: ForStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  let forContext = context;

  if (node.init || node.update || node.test) {
    forContext = context.createLexicalEnvContext(
      StaticJsDeclarativeEnvironmentRecord.from(context),
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

  let lastCompletion: NormalCompletion = null;
  do {
    if (node.test) {
      const testResult = yield* EvaluateNodeCommand(node.test, forContext, {
        forNormalValue: "ForStatement.test",
      });
      const condition = yield* toBoolean.js(testResult, context.realm);
      if (!condition) {
        break;
      }
    }

    const bodyContext = forContext.createLexicalEnvContext(
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
        /* No-op, continue to the next iteration */
      } else {
        throw e; // Rethrow any other error
      }
    }

    if (node.update) {
      yield* EvaluateNodeCommand(node.update, forContext);
    }
  } while (true);

  return lastCompletion;
}

export default typedMerge(forStatementNodeEvaluator, {
  environmentSetup: false,
});
