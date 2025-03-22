import { StaticJsValue } from "../../runtime/index.js";

export const ContinueEvaluation: unique symbol = Symbol(
  "static-js::ContinueEvaluation",
);
export type ContinueEvaluation = typeof ContinueEvaluation;

export const BreakEvaluation = Symbol("static-js::BreakEvaluation");
export type BreakEvaluation = typeof BreakEvaluation;

export type NodeEvaluationResult =
  | StaticJsValue
  | ContinueEvaluation
  | BreakEvaluation
  | null;

export function isControlFlowEvaluationResult(
  value: NodeEvaluationResult,
): value is ContinueEvaluation | BreakEvaluation {
  return value === ContinueEvaluation || value === BreakEvaluation;
}

export function assertValueResult(
  value: NodeEvaluationResult,
): asserts value is StaticJsValue {
  if (value === null || isControlFlowEvaluationResult(value)) {
    throw new Error("Expected a value result");
  }
}
