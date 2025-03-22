import { Node, isNode } from "@babel/types";

import { assertStaticJsValue, StaticJsValue } from "../../runtime/index.js";

import { NodeEvaluationResult } from "./node-evaluation-result.js";
import { NodeEvaluationContext } from "./node-evaluation-context.js";

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
import updateExpressionNodeEvaluator from "./UpdateExpression.js";
import catchClauseNodeEvaluator from "./CatchClause.js";

type NodeEvaluator<TKey extends Node["type"]> = {
  (
    node: Extract<Node, { type: TKey }>,
    context: NodeEvaluationContext,
  ): NodeEvaluationResult | null;
  environmentSetup?: (
    node: Extract<Node, { type: TKey }>,
    context: NodeEvaluationContext,
  ) => boolean;
};

type NodeEvaluators = {
  [key in Node["type"]]?: NodeEvaluator<key>;
};

const nodeEvaluators: NodeEvaluators = {
  ArrayExpression: arrayExpressionNodeEvaluator,
  AssignmentExpression: assignmentExpressionNodeEvaluator,
  BinaryExpression: binaryExpressionNodeEvaluator,
  BlockStatement: blockStatementNodeEvaluator,
  BooleanLiteral: booleanLiteralNodeEvaluator,
  CallExpression: callExpressionNodeEvaluator,
  CatchClause: catchClauseNodeEvaluator,
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
  UpdateExpression: updateExpressionNodeEvaluator,
  VariableDeclaration: variableDeclarationNodeEvaluator,
};

function getEvaluator<TType extends Node["type"]>(
  node: Node & { type: TType },
): NodeEvaluator<TType> | null {
  const evaluator = nodeEvaluators[node.type];
  return evaluator ?? null;
}

export function setupEnvironment(node: Node, context: NodeEvaluationContext) {
  // Recurse by default, there are only a few exceptions.
  let shouldRecurse = true;
  const evaluator = getEvaluator(node);

  if (evaluator && evaluator.environmentSetup) {
    shouldRecurse = evaluator.environmentSetup(node, context);
  }

  if (shouldRecurse) {
    for (const child of getChildNodes(node)) {
      setupEnvironment(child, context);
    }
  }
}

function getChildNodes(node: Node): Node[] {
  const childNodes: Node[] = [];
  for (const key in node) {
    const value = (node as any)[key];
    if (value == null) {
      continue;
    }

    if (isNode(value)) {
      childNodes.push(value);
    } else if (Array.isArray(value)) {
      for (const child of value) {
        if (child && isNode(child)) {
          childNodes.push(child);
        }
      }
    }
  }

  return childNodes;
}

export function evaluateNode(
  node: Node,
  context: NodeEvaluationContext,
): NodeEvaluationResult | null {
  const evaluator = getEvaluator(node);
  if (!evaluator) {
    throw new Error(`No evaluator for node type: ${node.type}`);
  }

  return evaluator(node, context);
}

export function evaluateNodeAssertValue(
  node: Node,
  context: NodeEvaluationContext,
): StaticJsValue {
  const result = evaluateNode(node, context);
  assertStaticJsValue(
    result,
    `Expected a ScriptJsValue from node ${node.type}`,
  );
  return result;
}
