import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { AwaitCommand } from "../../evaluator/commands/AwaitCommand.js";
import { SuspendCommand } from "../../evaluator/commands/SuspendCommand.js";
import { Completion } from "../../evaluator/completions/Completion.js";
import { Q } from "../../evaluator/completions/Q.js";
import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsAstFunction } from "../types/implementation/functions/StaticJsAstFunction.js";
import { StaticJsNativeFunctionImpl } from "../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { isStaticJsValue, StaticJsValue } from "../types/StaticJsValue.js";

import { promiseResolve } from "./promise-resolve.js";

export const Await = Q.makeReceiver(function* Await(
  value: StaticJsValue,
): EvaluationGenerator<StaticJsValue | Completion.Throw> {
  // FIXME: TEMP HACK: Starting to introduce SuspendCommand
  // Only modules should use this at the moment.
  const currentFunc = EvaluationContext.current.function;
  if (!currentFunc || currentFunc instanceof StaticJsAstFunction === false) {
    return yield* Q(AwaitCommand(value));
  }

  const { realm } = EvaluationContext.current;

  const suspendContext = SuspendCommand.createContext();

  const promise = yield* Q(promiseResolve(realm.intrinsics.Promise, value, realm));
  const onFulfilled = new StaticJsNativeFunctionImpl(realm, "", function* (_thisArg, v) {
    yield* SuspendCommand.runSuspendedContext(suspendContext, Completion.Normal(v));
    return realm.types.undefined;
  });
  const onRejected = new StaticJsNativeFunctionImpl(realm, "", function* (_thisArg, e) {
    yield* SuspendCommand.runSuspendedContext(suspendContext, Completion.Throw(e));
    return realm.types.undefined;
  });

  yield* Q(promise.thenEvaluator(onFulfilled, onRejected, false));

  const completion = yield* SuspendCommand(suspendContext);
  if (completion == null || (!isStaticJsValue(completion) && !Completion.Throw.is(completion))) {
    throw new StaticJsEngineError(
      "Expected a StaticJsValue or a ThrowCompletion from await suspend.",
    );
  }

  return completion;
});
