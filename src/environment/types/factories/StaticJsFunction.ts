import StaticJsEnvironment from "../../StaticJsEnvironment.js";

import { StaticJsRuntimeFunction } from "../implementation/index.js";
import {
  StaticJsFunction as IStaticJsFunction,
  StaticJsValue,
} from "../interfaces/index.js";

import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";

export type StaticJsRuntimeFunctionEvaluate<TArgs extends StaticJsValue[]> = (
  env: StaticJsEnvironment,
  thisObj: StaticJsValue,
  ...args: TArgs
) => StaticJsValue;

export default function StaticJsFunction<TArgs extends StaticJsValue[]>(
  func: StaticJsRuntimeFunctionEvaluate<TArgs>,
): IStaticJsFunction<TArgs>;
export default function StaticJsFunction<TArgs extends StaticJsValue[]>(
  name: string,
  func: StaticJsRuntimeFunctionEvaluate<TArgs>,
): IStaticJsFunction<TArgs>;
export default function StaticJsFunction(
  nameOrFunc: string | StaticJsRuntimeFunctionEvaluate<any[]>,
  evaluate?: StaticJsRuntimeFunctionEvaluate<any[]>,
): IStaticJsFunction<any> {
  if (staticJsInstanceOf(nameOrFunc) === "function") {
    return nameOrFunc as unknown as IStaticJsFunction<any>;
  }

  if (typeof nameOrFunc === "function") {
    return new StaticJsRuntimeFunction("f", nameOrFunc);
  }

  if (typeof nameOrFunc !== "string") {
    throw new Error("Invalid function name");
  }
  if (typeof evaluate !== "function") {
    throw new Error("Invalid function evaluate");
  }

  return new StaticJsRuntimeFunction(nameOrFunc, evaluate);
}
