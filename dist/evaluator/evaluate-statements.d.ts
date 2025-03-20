import type { Statement } from "@babel/types";
import { StaticJsScope, StaticJsValue } from "../environment/index.js";
export declare function evaluateStatements(
  statements: Statement[],
  scope?: StaticJsScope,
): StaticJsValue | null;
