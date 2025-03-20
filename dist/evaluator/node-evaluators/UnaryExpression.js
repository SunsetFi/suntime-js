import { StaticJsBoolean, StaticJsNumber, } from "../../environment/index.js";
import { evaluateNode } from "./evaluate-node.js";
import { assertValueResult } from "./node-evaluation-result.js";
export default function unaryExpressionNodeEvaluator(node, env) {
    const value = evaluateNode(node.argument, env);
    assertValueResult(value);
    switch (node.operator) {
        case "!":
            return StaticJsBoolean(!Boolean(value.toJs()));
        case "-":
            return StaticJsNumber(-Number(value.toJs()));
        case "+":
            return StaticJsNumber(Number(value.toJs()));
        default:
            throw new Error(`Unknown unary operator: ${node.operator}`);
    }
}
