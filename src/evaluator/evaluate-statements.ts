import type { Statement } from "@babel/types";

import { StaticJsScope, StaticJsValue } from "../environment/index.js";
import {
  BreakEvaluation,
  ContinueEvaluation,
  evaluateNode,
  NodeEvaluationResult,
} from "./node-evaluators/index.js";

export function evaluateStatements(
  statements: Statement[],
  scope?: StaticJsScope,
): StaticJsValue | null {
  scope ??= new StaticJsScope();

  let lastValue: NodeEvaluationResult | null = null;
  for (const statement of statements) {
    lastValue = evaluateNode(statement, scope);
    if (lastValue === ContinueEvaluation || lastValue === BreakEvaluation) {
      throw new Error("Continue and break statements must be inside loops");
    }
  }

  return lastValue;
}
