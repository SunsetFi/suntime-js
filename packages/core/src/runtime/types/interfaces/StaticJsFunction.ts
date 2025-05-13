import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import { StaticJsObjectLike } from "./StaticJsObject.js";
import { isStaticJsValue, StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsFunction extends StaticJsObjectLike {
  readonly runtimeTypeOf: "function";

  readonly isConstructor: boolean;

  call(thisArg: StaticJsValue, ...args: StaticJsValue[]): EvaluationGenerator;

  construct(...args: StaticJsValue[]): EvaluationGenerator;
}

export function isStaticJsFunction(value: unknown): value is StaticJsFunction {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeOf === "function";
}
