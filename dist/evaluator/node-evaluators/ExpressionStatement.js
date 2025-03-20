import { evaluateNode } from "./evaluate-node.js";
import { assertValueResult } from "./node-evaluation-result.js";
export default function expressionStatementNodeEvaluator(node, env) {
    const result = evaluateNode(node.expression, env);
    assertValueResult(result);
    return result;
}
