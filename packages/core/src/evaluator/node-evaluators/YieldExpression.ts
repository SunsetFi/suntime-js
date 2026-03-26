import { type YieldExpression } from "@babel/types";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";

import { isStaticJsValue, StaticJsValue } from "../../runtime/types/StaticJsValue.js";
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
import { StaticJsAsyncGeneratorDeclFunction } from "../../runtime/types/implementation/functions/StaticJsAsyncGeneratorDeclFunction.js";
import asyncIteratorClose from "../../runtime/iterators/async-iterator-close.js";

export default function* yieldExpressionNodeEvaluator(node: YieldExpression): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  if (!node.argument) {
    return yield* Q(YieldCommand(realm.types.undefined));
  }

  const value = yield* Q.val(EvaluateNodeCommand(node.argument));

  if (!node.delegate) {
    return yield* Q(YieldCommand(value));
  }

  const generatorKind = yield* getGeneratorKind();
  const iteratorRecord = yield* getIterator(value, generatorKind);
  const { iterator } = iteratorRecord;
  let received: Completion = realm.types.undefined;
  while (true) {
    if (Completion.Normal.is(received)) {
      if (!isStaticJsValue(received)) {
        throw new StaticJsEngineError(
          "Expected a StaticJsValue as the value of a normal completion from a yield expression.",
        );
      }
      let innerResult: StaticJsValue = yield* call(iteratorRecord.nextMethod, iterator, [received]);
      if (generatorKind === "async") {
        innerResult = yield* Q(AwaitCommand(innerResult));
      }
      if (!isStaticJsObjectLike(innerResult)) {
        throw Completion.Throw("TypeError", "Iterator result is not an object");
      }
      const done = yield* Q(iteratorComplete(innerResult));
      if (done) {
        return yield* Q(iteratorValue(innerResult));
      }

      const nextValue: StaticJsValue = yield* Q(iteratorValue(innerResult));
      received = yield* YieldCommand(nextValue);
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
          return yield* Q(iteratorValue(innerResult));
        }

        const nextValue: StaticJsValue = yield* Q(iteratorValue(innerResult));
        received = yield* YieldCommand(nextValue);
      } else {
        const closeCompletion = Completion.Normal(null);
        if (generatorKind === "async") {
          yield* Q(asyncIteratorClose(iteratorRecord, closeCompletion));
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
        let receivedValue: StaticJsValue = received.value;
        if (generatorKind === "async") {
          receivedValue = yield* Q(AwaitCommand(receivedValue));
        }
        throw Completion.Return(receivedValue);
      }

      let innerReturnResult: StaticJsValue = yield* call(returnMethod, iterator, [received.value]);
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

      received = yield* YieldCommand(yield* Q(iteratorValue(innerReturnResult)));
    }
  }
}

function* getGeneratorKind() {
  const func = EvaluationContext.current.function;
  return func instanceof StaticJsAsyncGeneratorDeclFunction ? "async" : "sync";
}
