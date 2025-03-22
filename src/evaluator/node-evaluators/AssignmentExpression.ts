import { AssignmentExpression } from "@babel/types";

import {
  isStaticJsScalar,
  isStaticJsValue,
  StaticJsString,
  StaticJsNumber,
} from "../../runtime/index.js";

import setLVal from "./LVal.js";
import { evaluateNode } from "./nodes.js";
import { NodeEvaluationContext } from "./node-evaluation-context.js";

export default function assignmentExpressionNodeEvaluator(
  node: AssignmentExpression,
  context: NodeEvaluationContext,
) {
  const { left, right } = node;

  let value = evaluateNode(right, context);
  if (!isStaticJsValue(value)) {
    throw new Error("Assignment value expression did not return a value.");
  }

  if (left.type === "OptionalMemberExpression") {
    // Throw the same error typescript throws.
    // Not sure why this is allowed by babel... New ES feature?
    throw new Error(
      "The left-hand side of an assignment expression cannot be an optional member expression.",
    );
  }

  switch (node.operator) {
    case "=":
      break;
    case "+=":
      {
        if (left.type !== "Identifier") {
          throw new SyntaxError("Invalid left-hand side in assignment");
        }

        const leftValue = context.env.getBindingValue(left.name, true);

        if (!isStaticJsScalar(leftValue) || !isStaticJsScalar(value)) {
          // One will become a string so both become a string.
          value = StaticJsString(leftValue.toString() + value.toString());
        } else {
          // Use numbers
          value = StaticJsNumber(leftValue.toNumber() + value.toNumber());
        }
      }
      break;
    case "-=":
      {
        if (left.type !== "Identifier") {
          throw new SyntaxError("Invalid left-hand side in assignment");
        }

        const leftValue = context.env.getBindingValue(left.name, true);

        value = StaticJsNumber(leftValue.toNumber() - value.toNumber());
      }
      break;
  }

  setLVal(left, value, context, (name, value) =>
    context.env.setMutableBinding(name, value, context.realm.strict),
  );

  // Pass the value for chaining.
  return value;
}
