import { isStaticJsValue, StaticJsValue } from "../runtime/internal.js";

const ContinueEvaluationResult: unique symbol = Symbol(
  "static-js::ContinueEvaluationResult",
);
type ContinueEvaluationResult = typeof ContinueEvaluationResult;
export { ContinueEvaluationResult };

const BreakEvaluationResult: unique symbol = Symbol(
  "static-js::BreakEvaluationResult",
);
type BreakEvaluationResult = typeof BreakEvaluationResult;
export { BreakEvaluationResult };

type EvaluationResult =
  | StaticJsValue
  | ContinueEvaluationResult
  | BreakEvaluationResult
  | null;

export default EvaluationResult;

export function isEvaluationResult(value: any): value is EvaluationResult {
  return (
    value === null ||
    value === ContinueEvaluationResult ||
    value === BreakEvaluationResult ||
    isStaticJsValue(value)
  );
}

export function isControlFlowEvaluationResult(
  value: any,
): value is ContinueEvaluationResult | BreakEvaluationResult {
  return value === ContinueEvaluationResult || value === BreakEvaluationResult;
}
