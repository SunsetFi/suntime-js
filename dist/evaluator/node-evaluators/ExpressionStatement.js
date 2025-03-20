import { evaluateNode } from "./evaluate-node.js";
import { assertValueResult } from "./node-evaluation-result.js";
export default function expressionStatementNodeEvaluator(node, scope) {
    const result = evaluateNode(node.expression, scope);
    assertValueResult(result);
    return result;
}
