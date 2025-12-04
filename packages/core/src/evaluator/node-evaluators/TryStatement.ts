import type { CatchClause, TryStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";
import type { NormalCompletion } from "../completions/NormalCompletion.js";

import boundNames from "../instantiation/algorithms/bound-names.js";
import bindingInitialization from "../bindings/binding-initialization.js";

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
  thrownValue: StaticJsValue,
  context: EvaluationContext,
): EvaluationGenerator {
  const oldEnv = context.lexicalEnv;

  let catchContext = context;

  if (node.param) {
    const catchEnv = new StaticJsDeclarativeEnvironmentRecord(
      oldEnv,
      context.realm,
    );
    for (const argName of boundNames(node.param)) {
      yield* catchEnv.createMutableBindingEvaluator(argName, false);
    }

    catchContext = context.createLexicalEnvContext(catchEnv);

    yield* bindingInitialization(
      node.param,
      thrownValue,
      catchEnv,
      catchContext,
    );
  }

  return yield* EvaluateNodeCommand(node.body, catchContext);
}

export default typedMerge(tryStatementNodeEvaluator, {
  environmentSetup: false,
});
