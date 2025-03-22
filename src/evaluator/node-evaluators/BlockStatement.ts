import { BlockStatement } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import StaticJsDeclarativeEnvironmentRecord from "../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";
import StaticJsLexicalEnvironment from "../../runtime/environments/implementation/StaticJsLexicalEnvironment.js";
import { StaticJsEnvironment, StaticJsUndefined } from "../../runtime/index.js";

import { evaluateNode, setupEnvironment } from "./nodes.js";

import {
  isControlFlowEvaluationResult,
  NodeEvaluationResult,
} from "./node-evaluation-result.js";
import { NodeEvaluationContext } from "./node-evaluation-context.js";

function blockStatementNodeEvaluator(
  node: BlockStatement,
  context: NodeEvaluationContext,
): NodeEvaluationResult {
  const env = node.extra?.environment as StaticJsEnvironment | undefined;
  if (!env) {
    throw new Error("Block statement environment not set up");
  }

  const blockContext: NodeEvaluationContext = {
    ...context,
    env,
  };

  for (const statement of node.body) {
    if (statement.type === "ReturnStatement") {
      if (statement.argument) {
        const returnValue = evaluateNode(statement.argument, blockContext);
        if (!returnValue) {
          throw new Error("Return statement did not evaluate to a value");
        }

        return returnValue;
      }

      return StaticJsUndefined();
    }

    const statementResult = evaluateNode(statement, blockContext);
    if (statementResult && isControlFlowEvaluationResult(statementResult)) {
      return statementResult;
    }
  }

  return null;
}

function blockStatementEnvironmentSetup(
  node: BlockStatement,
  context: NodeEvaluationContext,
) {
  const scope = new StaticJsLexicalEnvironment(
    new StaticJsDeclarativeEnvironmentRecord(),
    context.env,
  );
  const blockContext: NodeEvaluationContext = {
    ...context,
    env: scope,
  };

  for (const child of node.body) {
    setupEnvironment(child, blockContext);
  }

  // FIXME: I don't like this mutating the node object.
  // If we ever want to support intaking AST trees, this is a Big Issue.
  // But I currently can't think of a better quick way to do this.
  // We should refactor setup to pass back context we want to use later.
  node.extra = {
    ...node.extra,
    environment: scope,
  };

  return false;
}

export default typedMerge(blockStatementNodeEvaluator, {
  environmentSetup: blockStatementEnvironmentSetup,
});
