import { StaticJsObject } from "./StaticJsObject.js";
import { StaticJsValue } from "./StaticJsValue.js";
import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";

export interface StaticJsFunction<
  TArgs extends StaticJsValue[] = StaticJsValue[],
> extends StaticJsObject<"function"> {
  evaluate(...args: TArgs): StaticJsValue;
}
export function isStaticJsFunction(value: any): value is StaticJsFunction {
  return staticJsInstanceOf(value) === "function";
}
