import { StaticJsValue } from "../../environment/index.js";
export declare const ContinueEvaluation: unique symbol;
export type ContinueEvaluation = typeof ContinueEvaluation;
export declare const BreakEvaluation: unique symbol;
export type BreakEvaluation = typeof BreakEvaluation;
export type NodeEvaluationResult =
  | StaticJsValue
  | ContinueEvaluation
  | BreakEvaluation
  | null;
export declare function isControlFlowEvaluationResult(
  value: NodeEvaluationResult,
): value is ContinueEvaluation | BreakEvaluation;
export declare function assertValueResult(
  value: NodeEvaluationResult,
): asserts value is StaticJsValue;
