import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsObject } from "./index.js";

import type { StaticJsIteratorResult } from "./StaticJsIterator.js";
import type { StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsGenerator extends StaticJsObject {
  readonly runtimeTypeOf: "generator";

  nextEvaluator(value?: StaticJsValue): EvaluationGenerator<StaticJsIteratorResult>;

  throwEvaluator(value: StaticJsValue): EvaluationGenerator<StaticJsIteratorResult>;

  returnEvaluator(value?: StaticJsValue): EvaluationGenerator<StaticJsIteratorResult>;
}
