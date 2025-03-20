import { UnaryExpression } from "@babel/types";
import {
  StaticJsBoolean,
  StaticJsEnvironment,
  StaticJsNumber,
  StaticJsValue,
} from "../../environment/index.js";
import { evaluateNode } from "./evaluate-node.js";
import { assertValueResult } from "./node-evaluation-result.js";

export default function unaryExpressionNodeEvaluator(
  node: UnaryExpression,
  env: StaticJsEnvironment,
): StaticJsValue {
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
