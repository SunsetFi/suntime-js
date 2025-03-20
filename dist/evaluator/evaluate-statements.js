import { BreakEvaluation, ContinueEvaluation, evaluateNode, } from "./node-evaluators/index.js";
export function evaluateStatements(statements, env) {
    let lastValue = null;
    for (const statement of statements) {
        lastValue = evaluateNode(statement, env);
        if (lastValue === ContinueEvaluation || lastValue === BreakEvaluation) {
            throw new Error("Continue and break statements must be inside loops");
        }
    }
    return lastValue;
}
