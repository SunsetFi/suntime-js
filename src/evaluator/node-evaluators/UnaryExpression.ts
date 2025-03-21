import { UnaryExpression } from "@babel/types";
import {
  StaticJsBoolean,
  StaticJsEnvironment,
  StaticJsNumber,
  StaticJsString,
  StaticJsUndefined,
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
      return StaticJsBoolean(!value.toJs());
    case "-":
      return StaticJsNumber(-value.toJs());
    case "+":
      return StaticJsNumber(+value.toJs());
    case "~":
      return StaticJsNumber(~value.toJs());
    case "void":
      return StaticJsUndefined();
    case "typeof":
      return StaticJsString(value.typeOf);
    default:
      throw new Error(`Unknown unary operator: ${node.operator}.`);
  }
}
