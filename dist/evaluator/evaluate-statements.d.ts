import type { Statement } from "@babel/types";
import { StaticJsEnvironment, StaticJsValue } from "../environment/index.js";
export declare function evaluateStatements(
  statements: Statement[],
  env: StaticJsEnvironment,
): StaticJsValue | null;
