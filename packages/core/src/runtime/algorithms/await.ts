import { SuspendCommand } from "../../evaluator/commands/SuspendCommand.js";
import { Completion } from "../../evaluator/completions/Completion.js";
import { Q } from "../../evaluator/completions/Q.js";
import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsNativeFunctionImpl } from "../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

import { promiseResolve } from "./promise-resolve.js";

export const Await = Q.makeReceiver(function* Await(
  value: StaticJsValue,
): EvaluationGenerator<Completion> {
  const { realm } = EvaluationContext.current;

  const suspendContext = SuspendCommand.createContext();

  const promise = yield* Q(promiseResolve(realm.intrinsics.Promise, value, realm));
  const onFulfilled = new StaticJsNativeFunctionImpl(realm, "", function* (_thisArg, v) {
    yield* SuspendCommand.resume(suspendContext, Completion.Normal(v));
    return realm.types.undefined;
  });
  const onRejected = new StaticJsNativeFunctionImpl(realm, "", function* (_thisArg, e) {
    yield* SuspendCommand.resume(suspendContext, Completion.Throw(e));
    return realm.types.undefined;
  });

  yield* Q(promise.thenEvaluator(onFulfilled, onRejected));

  const completion = yield* SuspendCommand(suspendContext);
  return completion;
});
