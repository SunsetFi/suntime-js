import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { SuspendCommand } from "#evaluator/commands/SuspendCommand.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { Q } from "#evaluator/completions/Q.js";
import { EvaluationContext } from "#evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import { StaticJsNativeFunctionImpl } from "#types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { isStaticJsValue, type StaticJsValue } from "#types/StaticJsValue.js";

import { promiseResolve } from "./promise-resolve.js";

export const Await = Q.makeReceiver(function* Await(
  value: StaticJsValue,
): EvaluationGenerator<StaticJsValue | Completion.Throw> {
  const { realm } = EvaluationContext.current;

  const suspendContext = SuspendCommand.createContext();

  const promise = yield* Q(promiseResolve(realm.intrinsics.Promise, value));
  const onFulfilled = new StaticJsNativeFunctionImpl(
    realm,
    "",
    function* (_thisArg, v) {
      yield* SuspendCommand.runSuspendedContext(suspendContext, Completion.Normal(v));
      return realm.types.undefined;
    },
    {
      captures: [suspendContext],
    },
  );
  const onRejected = new StaticJsNativeFunctionImpl(
    realm,
    "",
    function* (_thisArg, e) {
      yield* SuspendCommand.runSuspendedContext(suspendContext, Completion.Throw(e));
      return realm.types.undefined;
    },
    {
      captures: [suspendContext],
    },
  );

  yield* Q(promise.thenEvaluator(onFulfilled, onRejected, false));

  const completion = yield* SuspendCommand(suspendContext);
  if (completion == null || (!isStaticJsValue(completion) && !Completion.Throw.is(completion))) {
    throw new StaticJsEngineError(
      "Expected a StaticJsValue or a ThrowCompletion from await suspend.",
    );
  }

  return completion;
});
