import { StaticJsEnvironment } from "../environment/index.js";
export declare function evaluateString(
  string: string,
  env: StaticJsEnvironment,
): any;
export declare function evaluateExpressionString(
  string: string,
  env?: StaticJsEnvironment,
): any;
