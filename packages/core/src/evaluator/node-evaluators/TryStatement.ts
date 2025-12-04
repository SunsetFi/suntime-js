import type { CatchClause, TryStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import { EvaluateNodeForCompletion } from "../commands/EvaluateNodeCommand.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";
import { isAbruptCompletion } from "../completions/AbruptCompletion.js";
import type { Completion } from "../completions/Completion.js";

import boundNames from "../instantiation/algorithms/bound-names.js";

import bindingInitialization from "../bindings/binding-initialization.js";

function* tryStatementNodeEvaluator(
  node: TryStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  let result = yield* EvaluateNodeForCompletion(node.block, context);

  if (node.handler && result instanceof ThrowCompletion) {
    result = yield* runCatch(node.handler, result.value, context);
  }

  if (node.finalizer) {
    const F = yield* EvaluateNodeForCompletion(node.finalizer, context);
    if (isAbruptCompletion(F)) {
      result = F;
    }
  }

  if (isAbruptCompletion(result)) {
    result.updateEmpty(context.realm.types.undefined);
    throw result;
  }

  return result ?? context.realm.types.undefined;
}

function* runCatch(
  node: CatchClause,
  thrownValue: StaticJsValue,
  context: EvaluationContext,
): EvaluationGenerator<Completion> {
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

  return yield* EvaluateNodeForCompletion(node.body, catchContext);
}

export default typedMerge(tryStatementNodeEvaluator, {
  environmentSetup: false,
});
