import type { CatchClause, TryStatement } from "@babel/types";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { StaticJsDeclarativeEnvironmentRecord } from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";
import bindingInitialization from "../bindings/binding-initialization.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { captureThrownCompletion } from "../completions/capture-thrown-completion.js";
import { Completion } from "../completions/Completion.js";
import { rethrowCompletion } from "../completions/rethrow-completion.js";
import { EvaluationContext } from "../EvaluationContext.js";
import boundNames from "../instantiation/algorithms/bound-names.js";

function* tryStatementNodeEvaluator(node: TryStatement): EvaluationGenerator {
  const { realm } = EvaluationContext.current;

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

function* runCatch(node: CatchClause, thrownValue: StaticJsValue): EvaluationGenerator<Completion> {
  const context = EvaluationContext.current;
  const { realm } = context;

  const oldEnv = context.lexicalEnv;

  if (node.param) {
    const catchEnv = new StaticJsDeclarativeEnvironmentRecord(oldEnv, realm);
    for (const argName of boundNames(node.param)) {
      yield* catchEnv.createMutableBindingEvaluator(argName, false);
    }

    context.lexicalEnv = catchEnv;
    try {
      yield* bindingInitialization(node.param, thrownValue, catchEnv);
      return yield* captureThrownCompletion(EvaluateNodeCommand(node.body));
    } finally {
      context.lexicalEnv = oldEnv;
    }
  }

  return yield* captureThrownCompletion(EvaluateNodeCommand(node.body));
}

export default tryStatementNodeEvaluator;
