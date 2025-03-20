import { StaticJsObject } from "./StaticJsObject.js";
import { StaticJsValue } from "./StaticJsValue.js";
export interface StaticJsFunction<
  TArgs extends StaticJsValue[] = StaticJsValue[],
> extends StaticJsObject<"function"> {
  evaluate(...args: TArgs): StaticJsValue;
}
export declare function isStaticJsFunction(
  value: any,
): value is StaticJsFunction;
