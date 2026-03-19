const visibleStepOperationPostfixes = ["Statement", "Declaration", "Expression"];

// FIXME: We want to show expressions that are in flow control tests (for, while, and so on),
// but don't want to show them for individual lines?
const invisibleOperations = new Set<string>(["BlockStatement", "ExpressionStatement"]);

export function isVisibleStepOperationType(operationType: string): boolean {
  if (invisibleOperations.has(operationType)) {
    return false;
  }

  // TODO: Make BinaryExpressions that are NOT comparisons invisible
  // OR: Only visible when they are in a test position (if, while, for, and so on)

  for (const postfix of visibleStepOperationPostfixes) {
    if (operationType.endsWith(postfix)) {
      return true;
    }
  }

  return false;
}

const stepOverTargetOperationPostfixes = ["Statement", "Declaration"];
const stepOverTargetOperations = new Set<string>([
  "CallExpression",
  "UpdateExpression",
  "AssignmentExpression",
]);

export function isStepOverTargetOperationType(operationType: string): boolean {
  if (invisibleOperations.has(operationType)) {
    return false;
  }

  if (stepOverTargetOperations.has(operationType)) {
    return true;
  }

  for (const postfix of stepOverTargetOperationPostfixes) {
    if (operationType.endsWith(postfix)) {
      return true;
    }
  }

  return false;
}
