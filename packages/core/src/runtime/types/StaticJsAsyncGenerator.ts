import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import { StaticJsPromise } from "./StaticJsPromise.js";
import { StaticJsTypeCode } from "./StaticJsTypeCode.js";
import { isStaticJsValue, type StaticJsValue } from "./StaticJsValue.js";

import type { StaticJsObject } from "./index.js";

export interface StaticJsAsyncGenerator extends StaticJsObject {
  readonly runtimeTypeOf: "async-generator";

  nextEvaluator(value?: StaticJsValue): EvaluationGenerator<StaticJsPromise>;
  returnEvaluator(value?: StaticJsValue): EvaluationGenerator<StaticJsPromise>;
  throwEvaluator(value: StaticJsValue): EvaluationGenerator<StaticJsPromise>;
}

export function isStaticJsAsyncGenerator(value: unknown): value is StaticJsAsyncGenerator {
  return isStaticJsValue(value) && value.runtimeTypeCode === StaticJsTypeCode.AsyncGenerator;
}
