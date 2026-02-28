import type { Node } from "@babel/types";

import type { NodeEvaluator } from "../NodeEvaluator.js";

import arrayExpressionNodeEvaluator from "./ArrayExpression.js";
import arrowFunctionExpressionNodeEvaluator from "./ArrowFunctionExpression.js";
import assignmentExpressionNodeEvaluator from "./AssignmentExpression.js";
import awaitExpressionNodeEvaluator from "./AwaitExpression.js";
import binaryExpressionNodeEvaluator from "./BinaryExpression.js";
import blockStatementNodeEvaluator from "./BlockStatement.js";
import booleanLiteralNodeEvaluator from "./BooleanLiteral.js";
import breakStatementNodeEvaluator from "./BreakStatement.js";
import callExpressionNodeEvaluator from "./CallExpression.js";
import catchClauseNodeEvaluator from "./CatchClause.js";
import classDeclarationNodeEvaluator from "./ClassDeclaration.js";
import classExpressionNodeEvaluator from "./ClassExpression.js";
import conditionalExpressionNodeEvaluator from "./ConditionalExpression.js";
import continueStatementNodeEvaluator from "./ContinueStatement.js";
import doWhileStatementNodeEvaluator from "./DoWhileStatement.js";
import emptyStatementNodeEvaluator from "./EmptyStatement.js";
import exportAllDeclarationNodeEvaluator from "./ExportAllDeclaration.js";
import exportDefaultDeclarationNodeEvaluator from "./ExportDefaultDeclaration.js";
import exportNamedDeclarationNodeEvaluator from "./ExportNamedDeclaration.js";
import expressionStatementNodeEvaluator from "./ExpressionStatement.js";
import fileNodeEvaluator from "./File.js";
import forInStatementNodeEvaluator from "./ForInStatement.js";
import forOfStatementNodeEvaluator from "./ForOfStatement.js";
import forStatementNodeEvaluator from "./ForStatement.js";
import functionDeclarationNodeEvaluator from "./FunctionDeclaration.js";
import functionExpressionNodeEvaluator from "./FunctionExpression.js";
import ifStatementNodeEvaluator from "./IfStatement.js";
import importDeclarationNodeEvaluator from "./ImportDeclaration.js";
import identifierNodeEvaluator from "./Identifier.js";
import labeledStatementNodeEvaluator from "./LabeledStatement.js";
import logicalExpressionNodeEvaluator from "./LogicalExpression.js";
import memberExpressionNodeEvaluator from "./MemberExpression.js";
import newExpressionNodeEvaluator from "./NewExpression.js";
import nullLiteralNodeEvaluator from "./NullLiteral.js";
import numericLiteralNodeEvaluator from "./NumericLiteral.js";
import objectExpressionNodeEvaluator from "./ObjectExpression.js";
import programNodeEvaluator from "./Program.js";
import returnStatementNodeEvaluator from "./ReturnStatement.js";
import sequenceExpressionNodeEvaluator from "./SequenceExpression.js";
import stringLiteralNodeEvaluator from "./StringLiteral.js";
import switchStatementNodeEvaluator from "./SwitchStatement.js";
import templateLiteralNodeEvaluator from "./TemplateLiteral.js";
import thisExpressionNodeEvaluator from "./ThisExpression.js";
import throwStatementNodeEvaluator from "./ThrowStatement.js";
import tryStatementNodeEvaluator from "./TryStatement.js";
import unaryExpressionNodeEvaluator from "./UnaryExpression.js";
import updateExpressionNodeEvaluator from "./UpdateExpression.js";
import variableDeclarationNodeEvaluator from "./VariableDeclaration.js";
import whileStatementNodeEvaluator from "./WhileStatement.js";
import withStatementNodeEvaluator from "./WithStatement.js";
import yieldExpressionNodeEvaluator from "./YieldExpression.js";

type NodeEvaluators = {
  [key in Node["type"]]?: NodeEvaluator<Extract<Node, { type: key }>>;
};

const nodeEvaluators: NodeEvaluators = {
  ArrayExpression: arrayExpressionNodeEvaluator,
  ArrowFunctionExpression: arrowFunctionExpressionNodeEvaluator,
  AssignmentExpression: assignmentExpressionNodeEvaluator,
  AwaitExpression: awaitExpressionNodeEvaluator,
  BinaryExpression: binaryExpressionNodeEvaluator,
  BlockStatement: blockStatementNodeEvaluator,
  BooleanLiteral: booleanLiteralNodeEvaluator,
  BreakStatement: breakStatementNodeEvaluator,
  CallExpression: callExpressionNodeEvaluator,
  CatchClause: catchClauseNodeEvaluator,
  ClassDeclaration: classDeclarationNodeEvaluator,
  ClassExpression: classExpressionNodeEvaluator,
  ConditionalExpression: conditionalExpressionNodeEvaluator,
  ContinueStatement: continueStatementNodeEvaluator,
  DoWhileStatement: doWhileStatementNodeEvaluator,
  EmptyStatement: emptyStatementNodeEvaluator,
  ExportAllDeclaration: exportAllDeclarationNodeEvaluator,
  ExportDefaultDeclaration: exportDefaultDeclarationNodeEvaluator,
  ExportNamedDeclaration: exportNamedDeclarationNodeEvaluator,
  ExpressionStatement: expressionStatementNodeEvaluator,
  File: fileNodeEvaluator,
  ForInStatement: forInStatementNodeEvaluator,
  ForOfStatement: forOfStatementNodeEvaluator,
  ForStatement: forStatementNodeEvaluator,
  FunctionDeclaration: functionDeclarationNodeEvaluator,
  FunctionExpression: functionExpressionNodeEvaluator,
  IfStatement: ifStatementNodeEvaluator,
  ImportDeclaration: importDeclarationNodeEvaluator,
  Identifier: identifierNodeEvaluator,
  LabeledStatement: labeledStatementNodeEvaluator,
  LogicalExpression: logicalExpressionNodeEvaluator,
  MemberExpression: memberExpressionNodeEvaluator,
  NewExpression: newExpressionNodeEvaluator,
  NullLiteral: nullLiteralNodeEvaluator,
  NumericLiteral: numericLiteralNodeEvaluator,
  ObjectExpression: objectExpressionNodeEvaluator,
  Program: programNodeEvaluator,
  ReturnStatement: returnStatementNodeEvaluator,
  SequenceExpression: sequenceExpressionNodeEvaluator,
  StringLiteral: stringLiteralNodeEvaluator,
  SwitchStatement: switchStatementNodeEvaluator,
  TemplateLiteral: templateLiteralNodeEvaluator,
  ThisExpression: thisExpressionNodeEvaluator,
  ThrowStatement: throwStatementNodeEvaluator,
  TryStatement: tryStatementNodeEvaluator,
  UnaryExpression: unaryExpressionNodeEvaluator,
  UpdateExpression: updateExpressionNodeEvaluator,
  VariableDeclaration: variableDeclarationNodeEvaluator,
  WhileStatement: whileStatementNodeEvaluator,
  WithStatement: withStatementNodeEvaluator,
  YieldExpression: yieldExpressionNodeEvaluator,
};

export function getEvaluator<TType extends Node["type"]>(
  node: Node & { type: TType },
): NodeEvaluator<Extract<Node, { type: TType }>> | null {
  const evaluator = nodeEvaluators[node.type];
  return evaluator ?? null;
}
