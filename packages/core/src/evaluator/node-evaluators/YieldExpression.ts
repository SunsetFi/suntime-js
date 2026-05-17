import { type YieldExpression } from "@babel/types";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { Await } from "../../runtime/algorithms/await.js";
import { call } from "../../runtime/algorithms/call.js";
import { getGeneratorKind } from "../../runtime/algorithms/get-generator-kind.js";
import { getMethod } from "../../runtime/algorithms/get-method.js";
import { Yield } from "../../runtime/algorithms/yield.js";
import { asyncIteratorClose } from "../../runtime/iterators/async-iterator-close.js";
import { getIterator } from "../../runtime/iterators/get-iterator.js";
import { iteratorClose } from "../../runtime/iterators/iterator-close.js";
import { iteratorComplete } from "../../runtime/iterators/iterator-complete.js";
import { iteratorValue } from "../../runtime/iterators/iterator-value.js";
import { StaticJsAsyncGeneratorImpl } from "../../runtime/types/implementation/functions/StaticJsAsyncGeneratorImpl.js";
import { StaticJsGeneratorImpl } from "../../runtime/types/implementation/functions/StaticJsGeneratorImpl.js";
import { isStaticJsObject } from "../../runtime/types/StaticJsObject.js";
import { isStaticJsValue, StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Completion } from "../completions/Completion.js";
import { Q } from "../completions/Q.js";
import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* yieldExpressionNodeEvaluator(node: YieldExpression): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  if (!node.argument) {
    return yield* Q(Yield(realm.types.undefined));
  }

  const value = yield* Q.val(EvaluateNodeCommand(node.argument));

  const generatorKind = yield* getGeneratorKind();
  if (generatorKind == "non-generator") {
    throw new StaticJsEngineError("Yield can only be used within a generator function.");
  }

  if (!node.delegate) {
    return yield* Q(Yield(value));
  }

  // Guarenteed by getGeneratorKind.
  const generator = EvaluationContext.current.generator!;

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
        innerResult = yield* Q(Await(innerResult));
      }
      if (!isStaticJsObject(innerResult)) {
        throw Completion.Throw("TypeError", "Iterator result is not an object");
      }
      const done = yield* Q(iteratorComplete(innerResult));
      if (done) {
        return yield* Q(iteratorValue(innerResult));
      }

      if (generatorKind === "async") {
        const asyncGenerator = generator as StaticJsAsyncGeneratorImpl;
        // Typescript 6 finds this as circular because:
        // received => innerResult => nextValue => received
        const nextValue: StaticJsValue = yield* Q(iteratorValue(innerResult));
        received = yield* asyncGenerator.asyncGeneratorYield(nextValue);
      } else {
        const syncGenerator = generator as StaticJsGeneratorImpl;
        received = yield* syncGenerator.generatorYield(innerResult);
      }
    } else if (Completion.Throw.is(received)) {
      const throwMethod = yield* Q(getMethod(iterator, "throw"));
      if (throwMethod) {
        let innerResult: StaticJsValue = yield* call(throwMethod, iterator, [received.value]);
        if (generatorKind === "async") {
          innerResult = yield* Q(Await(innerResult));
        }
        if (!isStaticJsObject(innerResult)) {
          throw Completion.Throw("TypeError", "Iterator result is not an object");
        }
        const done = yield* Q(iteratorComplete(innerResult));
        if (done) {
          return yield* Q(iteratorValue(innerResult));
        }

        if (generatorKind === "async") {
          const asyncGenerator = generator as StaticJsAsyncGeneratorImpl;
          // Typescript 6 finds this as circular because:
          // received => innerResult => nextValue => received
          const nextValue: StaticJsValue = yield* Q(iteratorValue(innerResult));
          received = yield* asyncGenerator.asyncGeneratorYield(nextValue);
        } else {
          const syncGenerator = generator as StaticJsGeneratorImpl;
          received = yield* syncGenerator.generatorYield(innerResult);
        }
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
          receivedValue = yield* Q(Await(receivedValue));
        }
        throw Completion.Return(receivedValue);
      }

      let innerReturnResult: StaticJsValue = yield* call(returnMethod, iterator, [received.value]);
      if (generatorKind === "async") {
        innerReturnResult = yield* Q(Await(innerReturnResult));
      }
      if (!isStaticJsObject(innerReturnResult)) {
        throw Completion.Throw("TypeError", "Iterator result is not an object");
      }
      const done = yield* Q(iteratorComplete(innerReturnResult));
      if (done) {
        const returnedValue = yield* Q(iteratorValue(innerReturnResult));
        throw Completion.Return(returnedValue);
      }

      if (generatorKind === "async") {
        const asyncGenerator = generator as StaticJsAsyncGeneratorImpl;
        // Typescript 6 finds this as circular because:
        // received => innerResult => nextValue => received
        const nextValue: StaticJsValue = yield* Q(iteratorValue(innerReturnResult));
        received = yield* asyncGenerator.asyncGeneratorYield(nextValue);
      } else {
        const syncGenerator = generator as StaticJsGeneratorImpl;
        received = yield* syncGenerator.generatorYield(innerReturnResult);
      }
    }
  }
}
