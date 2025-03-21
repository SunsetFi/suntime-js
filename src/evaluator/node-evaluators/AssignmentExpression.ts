import { AssignmentExpression } from "@babel/types";

import {
  StaticJsEnvironment,
  isStaticJsValue,
} from "../../environment/index.js";

import setLVal from "./LVal.js";
import { evaluateNode } from "./evaluate-node.js";

export default function assignmentExpressionNodeEvaluator(
  node: AssignmentExpression,
  env: StaticJsEnvironment,
) {
  const { left, right } = node;

  const value = evaluateNode(right, env);
  if (!isStaticJsValue(value)) {
    throw new Error("Assignment value expression did not return a value.");
  }

  if (left.type === "OptionalMemberExpression") {
    // Throw the same error typescript throws.
    // Not sure why this is allowed by babel... New ES feature?
    throw new Error(
      "The left-hand side of an assignment expression cannot be an optional member expression.",
    );
  } else {
    setLVal(left, value, env, (name, value) =>
      env.currentScope.setProperty(name, value),
    );
  }

  // Pass the value for chaining.
  return value;
}
