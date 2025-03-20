import { BlockStatement } from "@babel/types";
import { StaticJsScope, StaticJsUndefined } from "../../environment/index.js";
import { evaluateNode } from "./evaluate-node.js";
import {
  isControlFlowEvaluationResult,
  NodeEvaluationResult,
} from "./node-evaluation-result.js";

export default function blockStatementNodeEvaluator(
  node: BlockStatement,
  scope: StaticJsScope,
): NodeEvaluationResult {
  for (const statement of node.body) {
    if (statement.type === "ReturnStatement") {
      if (statement.argument) {
        const returnValue = evaluateNode(statement.argument, scope);
        if (!returnValue) {
          throw new Error("Return statement did not evaluate to a value");
        }

        return returnValue;
      }

      return StaticJsUndefined();
    }

    const statementResult = evaluateNode(statement, scope);
    if (statementResult && isControlFlowEvaluationResult(statementResult)) {
      return statementResult;
    }
  }

  return null;
}
