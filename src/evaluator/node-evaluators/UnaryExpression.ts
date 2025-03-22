import { UnaryExpression } from "@babel/types";
import {
  StaticJsBoolean,
  StaticJsNumber,
  StaticJsString,
  StaticJsUndefined,
  StaticJsValue,
} from "../../runtime/index.js";
import { evaluateNode } from "./nodes.js";
import { assertValueResult } from "./node-evaluation-result.js";
import { NodeEvaluationContext } from "./node-evaluation-context.js";

export default function unaryExpressionNodeEvaluator(
  node: UnaryExpression,
  context: NodeEvaluationContext,
): StaticJsValue {
  // Note: In the case of 'void', this is never used.
  // But it still can have side-effects.
  const value = evaluateNode(node.argument, context);
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
