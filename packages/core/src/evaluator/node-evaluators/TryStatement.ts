import type { CatchClause, TryStatement } from "@babel/types";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { Completion } from "../completions/Completion.js";

import boundNames from "../instantiation/algorithms/bound-names.js";

import bindingInitialization from "../bindings/binding-initialization.js";
import rethrowCompletion from "../completions/rethrow-completion.js";
import captureThrownCompletion from "../completions/capture-thrown-completion.js";

function* tryStatementNodeEvaluator(
  node: TryStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const { realm } = context;

  let result = yield* EvaluateNodeCommand(node.block);

  if (node.handler && Completion.Throw.is(result)) {
    result = yield* runCatch(node.handler, result.value);
  }

  if (node.finalizer) {
    const F = yield* EvaluateNodeCommand(node.finalizer);
    if (Completion.Abrupt.is(F)) {
      result = F;
    }
  }

  if (Completion.Abrupt.is(result)) {
    return rethrowCompletion(Completion.updateEmpty(result, realm.types.undefined));
  }

  return result ?? realm.types.undefined;
}

function* runCatch(
  node: CatchClause,
  thrownValue: StaticJsValue,
  // context: EvaluationContext,
): EvaluationGenerator<Completion> {
  const context = EvaluationContext.current;
  const { realm } = context;

  const oldEnv = context.lexicalEnv;

  if (node.param) {
    const catchEnv = new StaticJsDeclarativeEnvironmentRecord(oldEnv, realm);
    for (const argName of boundNames(node.param)) {
      yield* catchEnv.createMutableBindingEvaluator(argName, false);
    }

    context.lexicalEnv = catchEnv;
    yield* bindingInitialization(node.param, thrownValue, catchEnv, context);
  }

  const completion = yield* captureThrownCompletion(EvaluateNodeCommand(node.body));
  context.lexicalEnv = oldEnv;
  return completion;
}

export default tryStatementNodeEvaluator;
