import { StaticJsRuntimeFunction } from "../implementation/index.js";
import { StaticJsFunction as IStaticJsFunction } from "../index.js";
import { StaticJsValue } from "../interfaces/StaticJsValue.js";
import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";

export default function StaticJsFunction<TArgs extends StaticJsValue[]>(
  func: (...args: TArgs) => StaticJsValue,
): IStaticJsFunction<TArgs>;
export default function StaticJsFunction<TArgs extends StaticJsValue[]>(
  name: string,
  evaluate: (...args: TArgs) => StaticJsValue,
): IStaticJsFunction<TArgs>;
export default function StaticJsFunction(
  nameOrFunc: string | ((...args: any[]) => StaticJsValue),
  evaluate?: (...args: any[]) => StaticJsValue,
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
