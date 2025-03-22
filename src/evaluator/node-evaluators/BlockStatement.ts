import { BlockStatement } from "@babel/types";

import { StaticJsUndefined } from "../../runtime/index.js";

import { evaluateNode } from "./nodes.js";
import {
  isControlFlowEvaluationResult,
  NodeEvaluationResult,
} from "./node-evaluation-result.js";
import { NodeEvaluationContext } from "./node-evaluation-context.js";

export default function blockStatementNodeEvaluator(
  node: BlockStatement,
  context: NodeEvaluationContext,
): NodeEvaluationResult {
  for (const statement of node.body) {
    if (statement.type === "ReturnStatement") {
      if (statement.argument) {
        const returnValue = evaluateNode(statement.argument, context);
        if (!returnValue) {
          throw new Error("Return statement did not evaluate to a value");
        }

        return returnValue;
      }

      return StaticJsUndefined();
    }

    const statementResult = evaluateNode(statement, context);
    if (statementResult && isControlFlowEvaluationResult(statementResult)) {
      return statementResult;
    }
  }

  return null;
}
