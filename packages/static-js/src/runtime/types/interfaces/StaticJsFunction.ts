import {
  Completion,
  EvaluationGenerator,
} from "../../../evaluator/internal.js";

import { StaticJsObject } from "./StaticJsObject.js";
import { isStaticJsValue, StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsFunction extends StaticJsObject {
  readonly runtimeTypeOf: "function";

  readonly isConstructor: boolean;

  call(
    thisArg: StaticJsValue,
    ...args: StaticJsValue[]
  ): EvaluationGenerator<Completion>;

  construct(...args: StaticJsValue[]): EvaluationGenerator<StaticJsObject>;
}

export function isStaticJsFunction(value: unknown): value is StaticJsFunction {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeOf === "function";
}
