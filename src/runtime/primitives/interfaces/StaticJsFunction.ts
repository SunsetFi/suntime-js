import {
  Completion,
  EvaluationGenerator,
} from "../../../evaluator/internal.js";

import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";

import { StaticJsObject } from "./StaticJsObject.js";
import { StaticJsValue } from "./StaticJsValue.js";

export interface StaticJsFunction<
  TArgs extends StaticJsValue[] = StaticJsValue[],
> extends StaticJsObject<"function"> {
  call(thisArg: StaticJsValue, ...args: TArgs): EvaluationGenerator<Completion>;
}
export function isStaticJsFunction(value: unknown): value is StaticJsFunction {
  return staticJsInstanceOf(value) === "function";
}
