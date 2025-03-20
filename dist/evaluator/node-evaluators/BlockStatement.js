import { StaticJsUndefined, } from "../../environment/index.js";
import { evaluateNode } from "./evaluate-node.js";
import { isControlFlowEvaluationResult, } from "./node-evaluation-result.js";
export default function blockStatementNodeEvaluator(node, env) {
    for (const statement of node.body) {
        if (statement.type === "ReturnStatement") {
            if (statement.argument) {
                const returnValue = evaluateNode(statement.argument, env);
                if (!returnValue) {
                    throw new Error("Return statement did not evaluate to a value");
                }
                return returnValue;
            }
            return StaticJsUndefined();
        }
        const statementResult = evaluateNode(statement, env);
        if (statementResult && isControlFlowEvaluationResult(statementResult)) {
            return statementResult;
        }
    }
    return null;
}
