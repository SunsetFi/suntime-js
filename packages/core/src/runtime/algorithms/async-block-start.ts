import { isNode, Node } from "@babel/types";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { EvaluateNodeCommand } from "../../evaluator/commands/EvaluateNodeCommand.js";
import { SuspendCommand } from "../../evaluator/commands/SuspendCommand.js";
import { captureThrownCompletion } from "../../evaluator/completions/capture-thrown-completion.js";
import { Completion } from "../../evaluator/completions/Completion.js";
import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsPromiseCapabilityRecord } from "../types/StaticJsPromise.js";

import { call } from "./call.js";

export function* asyncBlockStart(
  promiseCapability: StaticJsPromiseCapabilityRecord,
  asyncBody: Node | EvaluationGenerator<Completion>,
  asyncContext: EvaluationContext,
): EvaluationGenerator<void> {
  function* closure() {
    const { realm } = EvaluationContext.current;
    let result: Completion;
    if (isNode(asyncBody)) {
      result = yield* EvaluateNodeCommand(asyncBody);
    } else {
      result = yield* captureThrownCompletion(asyncBody);
    }

    EvaluationContext.pop();

    if (Completion.Normal.is(result)) {
      yield* call(promiseCapability.resolve, realm.types.undefined, [realm.types.undefined]);
    } else if (Completion.Return.is(result)) {
      yield* call(promiseCapability.resolve, realm.types.undefined, [Completion.value(result)]);
    } else {
      if (!Completion.Throw.is(result)) {
        throw new StaticJsEngineError("Expected a throw completion");
      }
      yield* call(promiseCapability.reject, realm.types.undefined, [Completion.value(result)]);
    }
  }

  const context = SuspendCommand.createSuspendedContext(closure(), asyncContext);
  yield* SuspendCommand.runSuspendedContext(context, Completion.Normal(null));
}
