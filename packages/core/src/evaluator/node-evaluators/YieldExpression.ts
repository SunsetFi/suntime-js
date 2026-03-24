import { type YieldExpression } from "@babel/types";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";

import { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import { isStaticJsObjectLike } from "../../runtime/types/StaticJsObjectLike.js";

import getIterator from "../../runtime/iterators/get-iterator.js";
import { iteratorComplete } from "../../runtime/iterators/iterator-complete.js";
import iteratorValue from "../../runtime/iterators/iterator-value.js";
import iteratorClose from "../../runtime/iterators/iterator-close.js";

import call from "../../runtime/algorithms/call.js";
import getMethod from "../../runtime/algorithms/get-method.js";

import { YieldCommand } from "../commands/YieldCommand.js";

import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { AwaitCommand } from "../commands/AwaitCommand.js";

import { Completion } from "../completions/Completion.js";
import { Q } from "../completions/Q.js";
import { captureThrownCompletion } from "../completions/capture-thrown-completion.js";

export default function* yieldExpressionNodeEvaluator(node: YieldExpression): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  if (!node.argument) {
    return yield* YieldCommand(realm.types.undefined);
  }

  const value = yield* Q.val(EvaluateNodeCommand(node.argument));

  if (!node.delegate) {
    return yield* YieldCommand(value);
  }

  // TODO: Async generators
  const generatorKind = "sync" as "sync" | "async";
  const iteratorRecord = yield* getIterator(value, generatorKind);
  const { iterator } = iteratorRecord;
  let received: Completion = realm.types.undefined;
  while (true) {
    if (Completion.Normal.is(received)) {
      let innerResult: StaticJsValue = yield* call(iteratorRecord.nextMethod, iterator, [
        Completion.value(received),
      ]);
      if (generatorKind === "async") {
        innerResult = yield* Q(AwaitCommand(innerResult));
      }
      if (!isStaticJsObjectLike(innerResult)) {
        throw Completion.Throw("TypeError", "Iterator result is not an object");
      }
      const done = yield* Q(iteratorComplete(innerResult));
      if (done) {
        yield* Q(iteratorValue(innerResult));
      }

      if (generatorKind === "async") {
        // TODO: Async generators
        // AsyncGeneratorYieldCommand
        throw new StaticJsEngineError("Async generators are not yet supported");
      } else {
        const nextValue: StaticJsValue = yield* Q(iteratorValue(innerResult));
        received = yield* captureThrownCompletion(YieldCommand(nextValue));
      }
    } else if (Completion.Throw.is(received)) {
      const throwMethod = yield* Q(getMethod(iterator, "throw"));
      if (throwMethod) {
        let innerResult: StaticJsValue = yield* call(throwMethod, iterator, [received.value]);
        if (generatorKind === "async") {
          innerResult = yield* Q(AwaitCommand(innerResult));
        }
        if (!isStaticJsObjectLike(innerResult)) {
          throw Completion.Throw("TypeError", "Iterator result is not an object");
        }
        const done = yield* Q(iteratorComplete(innerResult));
        if (done) {
          yield* Q(iteratorValue(innerResult));
        }

        if (generatorKind === "async") {
          throw new StaticJsEngineError("Async generators are not yet supported");
        } else {
          const nextValue: StaticJsValue = yield* Q(iteratorValue(innerResult));
          received = yield* captureThrownCompletion(YieldCommand(nextValue));
        }
      } else {
        const closeCompletion = Completion.Normal(null);
        if (generatorKind === "async") {
          // TODO: asyncIteratorClose
          throw new StaticJsEngineError("Async generators are not yet supported");
        } else {
          yield* Q(iteratorClose(iteratorRecord, closeCompletion));
        }
        throw Completion.Throw("TypeError", "Iterator does not have a throw method");
      }
    } else {
      if (!Completion.Return.is(received)) {
        throw new StaticJsEngineError(
          "Expected a normal, throw, or return completion from yield expression.",
        );
      }

      const returnMethod = yield* Q(getMethod(iteratorRecord.iterator, "return"));
      if (!returnMethod) {
        let receivedValue = Completion.value(received);
        if (generatorKind === "async") {
          receivedValue = yield* Q(AwaitCommand(receivedValue));
        }
        throw Completion.Return(receivedValue);
      }

      let innerReturnResult: StaticJsValue = yield* call(returnMethod, iterator, [
        Completion.value(received),
      ]);
      if (generatorKind === "async") {
        innerReturnResult = yield* Q(AwaitCommand(innerReturnResult));
      }
      if (!isStaticJsObjectLike(innerReturnResult)) {
        throw Completion.Throw("TypeError", "Iterator result is not an object");
      }
      const done = yield* Q(iteratorComplete(innerReturnResult));
      if (done) {
        const returnedValue = yield* Q(iteratorValue(innerReturnResult));
        throw Completion.Return(returnedValue);
      }

      if (generatorKind === "async") {
        // AsyncGeneratorYield
        throw new StaticJsEngineError("Async generators are not yet supported");
      } else {
        received = yield* captureThrownCompletion(
          YieldCommand(yield* Q(iteratorValue(innerReturnResult))),
        );
      }
    }
  }
}
