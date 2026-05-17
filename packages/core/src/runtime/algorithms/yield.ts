import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { YieldCommand } from "../../evaluator/commands/YieldCommand.js";
import { Completion } from "../../evaluator/completions/Completion.js";
import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsGeneratorImpl } from "../types/implementation/functions/StaticJsGeneratorImpl.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

import { getGeneratorKind } from "./get-generator-kind.js";

export function* Yield(value: StaticJsValue): EvaluationGenerator<Completion> {
  // FIXME: TEMP HACK transitioning to suspend
  const context = EvaluationContext.current;
  if (!context.generator) {
    const yieldResult = yield* YieldCommand(value);
    return yieldResult;
  }

  const generatorKind = yield* getGeneratorKind();
  if (generatorKind === "async") {
    // TODO: AsyncGeneratorYield
    throw new Error("Async generators are not supported yet.");
  }

  const { generator } = EvaluationContext.current;

  if (generator instanceof StaticJsGeneratorImpl === false) {
    throw new StaticJsEngineError("Yield can only be used within a generator function.");
  }

  const result = yield* generator.generatorYield({
    value,
    done: false,
  });
  return result;
}
