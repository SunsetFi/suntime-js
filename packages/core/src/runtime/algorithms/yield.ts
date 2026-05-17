import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { Completion } from "../../evaluator/completions/Completion.js";
import { Q } from "../../evaluator/completions/Q.js";
import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { createIteratorResultObject } from "../iterators/create-iterator-result-object.js";
import { StaticJsAsyncGeneratorImpl } from "../types/implementation/functions/StaticJsAsyncGeneratorImpl.js";
import { StaticJsGeneratorImpl } from "../types/implementation/functions/StaticJsGeneratorImpl.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

import { Await } from "./await.js";
import { getGeneratorKind } from "./get-generator-kind.js";

export function* Yield(value: StaticJsValue): EvaluationGenerator<Completion> {
  const generatorKind = yield* getGeneratorKind();

  const { generator } = EvaluationContext.current;

  if (generatorKind === "async") {
    const asyncGenerator = generator as StaticJsAsyncGeneratorImpl;
    const awaited = yield* Q(Await(value));
    return yield* asyncGenerator.asyncGeneratorYield(awaited);
  } else if (generatorKind === "sync") {
    const syncGenerator = generator as StaticJsGeneratorImpl;
    const iteratorResult = yield* createIteratorResultObject(value, false);
    return yield* syncGenerator.generatorYield(iteratorResult);
  }

  throw new StaticJsEngineError("Yield can only be used within a generator function.");
}
