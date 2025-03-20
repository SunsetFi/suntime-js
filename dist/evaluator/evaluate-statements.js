import { StaticJsScope } from "../environment/index.js";
import { BreakEvaluation, ContinueEvaluation, evaluateNode, } from "./node-evaluators/index.js";
export function evaluateStatements(statements, scope) {
    scope ?? (scope = new StaticJsScope());
    let lastValue = null;
    for (const statement of statements) {
        lastValue = evaluateNode(statement, scope);
        if (lastValue === ContinueEvaluation || lastValue === BreakEvaluation) {
            throw new Error("Continue and break statements must be inside loops");
        }
    }
    return lastValue;
}
