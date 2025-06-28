import type { BlockStatement, CatchClause, TryStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";
import StaticJsLexicalEnvironment from "../../runtime/environments/implementation/StaticJsLexicalEnvironment.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";

import setLVal from "./LVal.js";
import setupEnvironment from "./setup-environment.js";

function* tryStatementNodeEvaluator(
  node: TryStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  // Due to the way Environment Records are handled for try/catch/finally,
  // we manually handle blocks ourselves instead of delegating to the BlockStatement node evaluator.

  let returnValue: StaticJsValue | null = null;
  try {
    returnValue = yield* runBlock(node.block, context);
  } catch (e) {
    if (e instanceof ThrowCompletion) {
      if (node.handler) {
        returnValue = yield* runCatch(node.handler, e.value, context);
      } else {
        throw e;
      }
    }
  } finally {
    if (node.finalizer) {
      const finalizerValue = yield* runBlock(node.finalizer, context);
      if (finalizerValue !== null) {
        returnValue = finalizerValue;
      }
    }
  }

  return returnValue;
}

function* runCatch(
  node: CatchClause,
  value: StaticJsValue,
  context: EvaluationContext,
): EvaluationGenerator {
  const catchContext = context.createBlockContext(
    new StaticJsDeclarativeEnvironmentRecord(context.realm),
  );

  if (node.param) {
    yield* setLVal(node.param, value, catchContext, function* (name, value) {
      yield* catchContext.env.createMutableBindingEvaluator(name, false);
      yield* catchContext.env.initializeBindingEvaluator(name, value);
    });
  }

  return yield* runBlock(node.body, catchContext);
}

function* runBlock(
  node: BlockStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const env = new StaticJsLexicalEnvironment(
    context.realm,
    new StaticJsDeclarativeEnvironmentRecord(context.realm),
    context.env,
  );

  const blockContext = context.createBlockContext(env);

  for (const statement of node.body) {
    yield* setupEnvironment(statement, blockContext);
  }

  let completionResult: StaticJsValue | null = null;
  for (const statement of node.body) {
    completionResult = yield* EvaluateNodeCommand(statement, blockContext);
  }

  return completionResult;
}

export default typedMerge(tryStatementNodeEvaluator, {
  environmentSetup: false,
});
