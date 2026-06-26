import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsRunTaskOptions } from "#tasks/StaticJsRunTaskOptions.js";

import type { StaticJsObject } from "./index.js";
import type { StaticJsPromise } from "./StaticJsPromise.js";

import { StaticJsTypeCode } from "./StaticJsTypeCode.js";
import { isStaticJsValue, type StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsAsyncGenerator extends StaticJsObject {
  readonly runtimeTypeOf: "async-generator";

  nextSync(value?: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsPromise;
  nextAsync(value?: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<StaticJsPromise>;
  nextEvaluator(value?: StaticJsValue): EvaluationGenerator<StaticJsPromise>;

  returnSync(value?: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsPromise;
  returnAsync(value?: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<StaticJsPromise>;
  returnEvaluator(value?: StaticJsValue): EvaluationGenerator<StaticJsPromise>;

  throwSync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsPromise;
  throwAsync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<StaticJsPromise>;
  throwEvaluator(value: StaticJsValue): EvaluationGenerator<StaticJsPromise>;
}

export function isStaticJsAsyncGenerator(value: unknown): value is StaticJsAsyncGenerator {
  return isStaticJsValue(value) && value.runtimeTypeCode === StaticJsTypeCode.AsyncGenerator;
}
