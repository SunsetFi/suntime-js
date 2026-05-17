import { Node } from "@babel/types";

import { Completion } from "../../evaluator/completions/Completion.js";
import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsPromiseCapabilityRecord } from "../types/StaticJsPromise.js";

import { asyncBlockStart } from "./async-block-start.js";

export function* asyncFunctionStart(
  promiseCapability: StaticJsPromiseCapabilityRecord,
  asyncFunctionBody: Node | EvaluationGenerator<Completion>,
): EvaluationGenerator<void> {
  const runningContext = EvaluationContext.current;
  const asyncContext = runningContext.create();
  yield* asyncBlockStart(promiseCapability, asyncFunctionBody, asyncContext);
}
