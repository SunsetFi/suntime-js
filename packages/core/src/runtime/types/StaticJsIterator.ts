import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsObjectLike } from "./StaticJsObjectLike.js";
import StaticJsTypeCode from "./StaticJsTypeCode.js";
import { isStaticJsValue } from "./StaticJsValue.js";

export interface StaticJsIterator extends StaticJsObjectLike {
  readonly runtimeTypeOf: "iterator";

  nextEvaluator(): EvaluationGenerator<StaticJsObjectLike>;
}

export function isStaticJsIterator(value: unknown): value is StaticJsIterator {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeCode === StaticJsTypeCode.Iterator;
}
