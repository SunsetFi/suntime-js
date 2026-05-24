import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsRunTaskOptions } from "../tasks/StaticJsRunTaskOptions.js";

import type { StaticJsIteratorResult } from "./StaticJsIterator.js";
import type { StaticJsValue } from "./StaticJsValue.js";

import type { StaticJsObject } from "./index.js";

export interface StaticJsGenerator extends StaticJsObject {
  readonly runtimeTypeOf: "generator";

  nextSync(value?: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsIteratorResult;
  nextAsync(value?: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<StaticJsIteratorResult>;
  nextEvaluator(value?: StaticJsValue): EvaluationGenerator<StaticJsIteratorResult>;

  returnSync(value?: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsIteratorResult;
  returnAsync(
    value?: StaticJsValue,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsIteratorResult>;
  returnEvaluator(value?: StaticJsValue): EvaluationGenerator<StaticJsIteratorResult>;

  throwSync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsIteratorResult;
  throwAsync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<StaticJsIteratorResult>;
  throwEvaluator(value: StaticJsValue): EvaluationGenerator<StaticJsIteratorResult>;
}
