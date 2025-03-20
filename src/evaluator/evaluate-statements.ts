import type { Statement } from "@babel/types";

import {
  StaticJsEnvironment,
  StaticJsScope,
  StaticJsValue,
} from "../environment/index.js";
import {
  BreakEvaluation,
  ContinueEvaluation,
  evaluateNode,
  NodeEvaluationResult,
} from "./node-evaluators/index.js";

export function evaluateStatements(
  statements: Statement[],
  env: StaticJsEnvironment,
): StaticJsValue | null {
  let lastValue: NodeEvaluationResult | null = null;
  for (const statement of statements) {
    lastValue = evaluateNode(statement, env);
    if (lastValue === ContinueEvaluation || lastValue === BreakEvaluation) {
      throw new Error("Continue and break statements must be inside loops");
    }
  }

  return lastValue;
}
