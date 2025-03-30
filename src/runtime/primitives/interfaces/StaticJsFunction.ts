import {
  Completion,
  EvaluationGenerator,
} from "../../../evaluator/internal.js";

import { StaticJsObject } from "./StaticJsObject.js";
import { isStaticJsValue, StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsFunction<
  TArgs extends StaticJsValue[] = StaticJsValue[],
> extends StaticJsObject {
  call(thisArg: StaticJsValue, ...args: TArgs): EvaluationGenerator<Completion>;
}
export function isStaticJsFunction(value: unknown): value is StaticJsFunction {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeOf === "function";
}
