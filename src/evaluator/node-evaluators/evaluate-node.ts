import { Standardized, Node } from "@babel/types";

import {
  assertStaticJsValue,
  StaticJsEnvironment,
  StaticJsValue,
} from "../../environment/index.js";

import { NodeEvaluationResult } from "./node-evaluation-result.js";

import variableDeclarationNodeEvaluator from "./VariableDeclaration.js";
import numericLiteralNodeEvaluator from "./NumericLiteral.js";
import stringLiteralNodeEvaluator from "./StringLiteral.js";
import nullLiteralNodeEvaluator from "./NullLiteral.js";
import booleanLiteralNodeEvaluator from "./BooleanLiteral.js";
import expressionStatementNodeEvaluator from "./ExpressionStatement.js";
import identifierNodeEvaluator from "./Identifier.js";
import unaryExpressionNodeEvaluator from "./UnaryExpression.js";
import assignmentExpressionNodeEvaluator from "./AssignmentExpression.js";
import functionDeclarationNodeEvaluator from "./FunctionDeclaration.js";
import functionExpressionNodeEvaluator from "./FunctionExpression.js";
import callExpressionNodeEvaluator from "./CallExpression.js";
import blockStatementNodeEvaluator from "./BlockStatement.js";
import memberExpressionNodeEvaluator from "./MemberExpression.js";
import arrayExpressionNodeEvaluator from "./ArrayExpression.js";
import objectExpressionNodeEvaluator from "./ObjectExpression.js";
import binaryExpressionNodeEvaluator from "./BinaryExpression.js";

type NodeEvaluators = {
  [key in Standardized["type"]]?: (
    node: Extract<Standardized, { type: key }>,
    scope: StaticJsEnvironment,
  ) => NodeEvaluationResult | null;
};
const nodeEvaluators: NodeEvaluators = {
  ArrayExpression: arrayExpressionNodeEvaluator,
  AssignmentExpression: assignmentExpressionNodeEvaluator,
  BinaryExpression: binaryExpressionNodeEvaluator,
  BlockStatement: blockStatementNodeEvaluator,
  BooleanLiteral: booleanLiteralNodeEvaluator,
  CallExpression: callExpressionNodeEvaluator,
  ExpressionStatement: expressionStatementNodeEvaluator,
  FunctionDeclaration: functionDeclarationNodeEvaluator,
  FunctionExpression: functionExpressionNodeEvaluator,
  Identifier: identifierNodeEvaluator,
  MemberExpression: memberExpressionNodeEvaluator,
  NullLiteral: nullLiteralNodeEvaluator,
  NumericLiteral: numericLiteralNodeEvaluator,
  ObjectExpression: objectExpressionNodeEvaluator,
  StringLiteral: stringLiteralNodeEvaluator,
  UnaryExpression: unaryExpressionNodeEvaluator,
  VariableDeclaration: variableDeclarationNodeEvaluator,
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

export function evaluateNodeAssertValue(
  node: Node,
  env: StaticJsEnvironment,
): StaticJsValue {
  const result = evaluateNode(node, env);
  assertStaticJsValue(
    result,
    `Expected a ScriptJsValue from node ${node.type}`,
  );
  return result;
}
