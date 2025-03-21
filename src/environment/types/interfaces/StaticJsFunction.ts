import { StaticJsObject } from "./StaticJsObject.js";
import { StaticJsValue } from "./StaticJsValue.js";
import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";
import StaticJsEnvironment from "../../StaticJsEnvironment.js";

export interface StaticJsFunction<
  TArgs extends StaticJsValue[] = StaticJsValue[],
> extends StaticJsObject<"function"> {
  evaluate(env: StaticJsEnvironment, ...args: TArgs): StaticJsValue;
}
export function isStaticJsFunction(value: any): value is StaticJsFunction {
  return staticJsInstanceOf(value) === "function";
}
