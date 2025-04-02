import {
  Completion,
  EvaluationGenerator,
} from "../../../evaluator/internal.js";

import { StaticJsObject } from "./StaticJsObject.js";
import { isStaticJsValue, StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsFunction extends StaticJsObject {
  readonly runtimeTypeOf: "function";
  call(
    thisArg: StaticJsValue,
    ...args: StaticJsValue[]
  ): EvaluationGenerator<Completion>;
}
export function isStaticJsFunction(value: unknown): value is StaticJsFunction {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeOf === "function";
}
