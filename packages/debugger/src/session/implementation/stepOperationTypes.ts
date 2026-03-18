import type { SourceLocation } from "@babel/types";

import type { StaticJsTaskIteratorLocation } from "@suntime-js/core";

const visibleStepOperationTypes = new Set([
  "BreakStatement",
  "CatchClause",
  "ClassDeclaration",
  "ContinueStatement",
  "DoWhileStatement",
  "ExportAllDeclaration",
  "ExportDefaultDeclaration",
  "ExportNamedDeclaration",
  "ExpressionStatement",
  "ForInStatement",
  "ForOfStatement",
  "ForStatement",
  "FunctionDeclaration",
  "IfStatement",
  "ImportDeclaration",
  "LabeledStatement",
  "Program",
  "ReturnStatement",
  "SwitchCase",
  "SwitchStatement",
  "ThrowStatement",
  "TryStatement",
  "VariableDeclaration",
  "WhileStatement",
  "WithStatement",
]);

const functionLikeOperationTypes = new Set([
  "ArrowFunctionExpression",
  "ClassMethod",
  "ClassPrivateMethod",
  "FunctionDeclaration",
  "FunctionExpression",
  "ObjectMethod",
]);

const callBoundaryOperationTypes = new Set(["CallExpression", "NewExpression"]);

export interface StepCursor {
  readonly operationKey: string | null;
  readonly operationType: string | null;
  readonly visibleStopKey: string | null;
  readonly frameDepth: number;
  readonly isVisibleStop: boolean;
  readonly isCallBoundary: boolean;
}

export function isVisibleStepOperationType(operationType: string | null | undefined): boolean {
  return operationType != null && visibleStepOperationTypes.has(operationType);
}

export function isFunctionLikeOperationType(operationType: string | null | undefined): boolean {
  return operationType != null && functionLikeOperationTypes.has(operationType);
}

export function isCallBoundaryOperationType(operationType: string | null | undefined): boolean {
  return operationType != null && callBoundaryOperationTypes.has(operationType);
}

export function getOperationKey(
  operationType: string | null | undefined,
  location: StaticJsTaskIteratorLocation | SourceLocation | null | undefined,
): string | null {
  if (!operationType || !location) {
    return null;
  }

  const sourceName = "sourceName" in location ? location.sourceName : location.filename;
  const start = location.start;
  const end = location.end;
  if (!sourceName || !start || !end) {
    return null;
  }

  const startCharacter = "character" in start ? start.character : start.index;
  const endCharacter = "character" in end ? end.character : end.index;

  return [
    sourceName,
    operationType,
    start.line,
    start.column,
    startCharacter,
    end.line,
    end.column,
    endCharacter,
  ].join(":");
}
