export const ContinueEvaluation = Symbol("static-js::ContinueEvaluation");
export const BreakEvaluation = Symbol("static-js::BreakEvaluation");
export function isControlFlowEvaluationResult(value) {
    return value === ContinueEvaluation || value === BreakEvaluation;
}
export function assertValueResult(value) {
    if (value === null || isControlFlowEvaluationResult(value)) {
        throw new Error("Expected a value result");
    }
}
