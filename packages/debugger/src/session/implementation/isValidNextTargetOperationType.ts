const additionalValidNextTargetOperationTypes = new Set(["CatchClause", "SwitchCase"]);

export function isValidNextTargetOperationType(operationType: string | null | undefined): boolean {
  if (!operationType || operationType === "File" || operationType === "Program") {
    return false;
  }

  if (operationType.endsWith("Statement") || operationType.endsWith("Declaration")) {
    return true;
  }

  return additionalValidNextTargetOperationTypes.has(operationType);
}
