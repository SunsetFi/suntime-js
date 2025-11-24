import type { CatchClause, TryStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";
import type { NormalCompletion } from "../completions/NormalCompletion.js";

import setLVal from "./LVal.js";

function* tryStatementNodeEvaluator(
  node: TryStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  // Due to the way Environment Records are handled for try/catch/finally,
  // we manually handle blocks ourselves instead of delegating to the BlockStatement node evaluator.

  let lastCompletion: NormalCompletion = null;
  try {
    lastCompletion = yield* EvaluateNodeCommand(node.block, context);
  } catch (e) {
    if (e instanceof ThrowCompletion && node.handler) {
      lastCompletion = yield* runCatch(node.handler, e.value, context);
    } else {
      throw e;
    }
  } finally {
    if (node.finalizer) {
      const finalizerValue = yield* EvaluateNodeCommand(
        node.finalizer,
        context,
      );
      if (finalizerValue !== null) {
        lastCompletion = finalizerValue;
      }
    }
  }

  return lastCompletion;
}

function* runCatch(
  node: CatchClause,
  value: StaticJsValue,
  context: EvaluationContext,
): EvaluationGenerator {
  const catchContext = context.createLexicalEnvContext(
    StaticJsDeclarativeEnvironmentRecord.from(context),
  );

  if (node.param) {
    yield* setLVal(node.param, value, catchContext, function* (name, value) {
      yield* catchContext.lexicalEnv.createMutableBindingEvaluator(name, false);
      yield* catchContext.lexicalEnv.initializeBindingEvaluator(name, value);
    });
  }

  return yield* EvaluateNodeCommand(node.body, catchContext);
}

export default typedMerge(tryStatementNodeEvaluator, {
  environmentSetup: false,
});
