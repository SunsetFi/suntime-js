import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsObject } from "./StaticJsObject.js";
import { StaticJsTypeCode } from "./StaticJsTypeCode.js";

import { isStaticJsValue, type StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsIteratorResult {
  readonly value: StaticJsValue;
  readonly done: boolean;
}

export interface StaticJsIterator extends StaticJsObject {
  readonly runtimeTypeOf: "iterator";

  nextEvaluator(): EvaluationGenerator<StaticJsIteratorResult>;
}

export function isStaticJsIterator(value: unknown): value is StaticJsIterator {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeCode === StaticJsTypeCode.Iterator;
}
