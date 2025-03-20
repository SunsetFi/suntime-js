import { Standardized, Node } from "@babel/types";

import { StaticJsEnvironment, StaticJsScope } from "../../environment/index.js";

import variableDeclarationNodeEvaluator from "./VariableDeclaration.js";
import numericLiteralNodeEvaluator from "./NumericLiteral.js";
import stringLiteralNodeEvaluator from "./StringLiteral.js";
import nullLiteralNodeEvaluator from "./NullLiteral.js";
import booleanLiteralNodeEvaluator from "./BooleanLiteral.js";
import expressionStatementNodeEvaluator from "./ExpressionStatement.js";
import identifierNodeEvaluator from "./Identifier.js";
import unaryExpressionNodeEvaluator from "./UnaryExpression.js";

import { NodeEvaluationResult } from "./node-evaluation-result.js";

type NodeEvaluators = {
  [key in Standardized["type"]]?: (
    node: Extract<Standardized, { type: key }>,
    scope: StaticJsEnvironment,
  ) => NodeEvaluationResult | null;
};
const nodeEvaluators: NodeEvaluators = {
  VariableDeclaration: variableDeclarationNodeEvaluator,
  NumericLiteral: numericLiteralNodeEvaluator,
  StringLiteral: stringLiteralNodeEvaluator,
  NullLiteral: nullLiteralNodeEvaluator,
  BooleanLiteral: booleanLiteralNodeEvaluator,
  ExpressionStatement: expressionStatementNodeEvaluator,
  Identifier: identifierNodeEvaluator,
  UnaryExpression: unaryExpressionNodeEvaluator,
};

export function evaluateNode(
  node: Node,
  env: StaticJsEnvironment,
): NodeEvaluationResult | null {
  const evaluator = (nodeEvaluators as any)[node.type];
  if (evaluator == null) {
    throw new Error(`Unexpected AST node type: ${node.type}`);
  }

  return evaluator(node as any, env);
}
