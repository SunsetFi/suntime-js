import { UnaryExpression } from "@babel/types";
import {
  StaticJsBoolean,
  StaticJsNumber,
  StaticJsScope,
  StaticJsValue,
} from "../../environment/index.js";
import { evaluateNode } from "./evaluate-node.js";
import { assertValueResult } from "./node-evaluation-result.js";

export default function unaryExpressionNodeEvaluator(
  node: UnaryExpression,
  scope: StaticJsScope,
): StaticJsValue {
  const value = evaluateNode(node.argument, scope);
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
