import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsObjectLike } from "./index.js";

import { StaticJsPromise } from "./StaticJsPromise.js";
import type { StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsAsyncGenerator extends StaticJsObjectLike {
  readonly runtimeTypeOf: "async-generator";

  nextEvaluator(value?: StaticJsValue): EvaluationGenerator<StaticJsPromise>;

  throwEvaluator(value: StaticJsValue): EvaluationGenerator<StaticJsPromise>;

  returnEvaluator(value?: StaticJsValue): EvaluationGenerator<StaticJsPromise>;
}
