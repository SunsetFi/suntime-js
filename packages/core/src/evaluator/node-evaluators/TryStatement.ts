import type { CatchClause, TryStatement } from "@babel/types";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { Completion } from "../completions/Completion.js";

import boundNames from "../instantiation/algorithms/bound-names.js";

import bindingInitialization from "../bindings/binding-initialization.js";
import rethrowCompletion from "../completions/rethrow-completion.js";

function* tryStatementNodeEvaluator(
  node: TryStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  // FIXME: Gross hack.
  // We are starting to embrace completions as themselves, but we still have
  // completions as generator throw/return.
  // So we have to try/catch/finally this to catch our generator's return.
  let result = yield* EvaluateNodeCommand(node.block, context);

  if (node.handler && Completion.Throw.is(result)) {
    result = yield* runCatch(node.handler, result.value, context);
  }

  if (node.finalizer) {
    const F = yield* EvaluateNodeCommand(node.finalizer, context);
    if (Completion.Abrupt.is(F)) {
      result = F;
    }
  }

  if (Completion.Abrupt.is(result)) {
    return rethrowCompletion(
      Completion.updateEmpty(result, context.realm.types.undefined),
    );
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

  return yield* EvaluateNodeCommand(node.body, catchContext);
}

export default tryStatementNodeEvaluator;
