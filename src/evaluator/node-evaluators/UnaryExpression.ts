import { UnaryExpression } from "@babel/types";
import {
  StaticJsBoolean,
  StaticJsNumber,
  StaticJsString,
  StaticJsUndefined,
} from "../../runtime/index.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import { EvaluateNodeAssertValueCommand } from "../commands/index.js";
import EvaluationContext from "../EvaluationContext.js";

export default function* unaryExpressionNodeEvaluator(
  node: UnaryExpression,
  context: EvaluationContext,
): EvaluationGenerator {
  // Note: In the case of 'void', this is never used.
  // But it still can have side-effects.
  const value = yield* EvaluateNodeAssertValueCommand(node.argument, context);

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
