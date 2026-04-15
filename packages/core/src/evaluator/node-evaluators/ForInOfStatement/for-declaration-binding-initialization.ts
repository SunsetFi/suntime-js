import type { VariableDeclaration } from "@babel/types";

import type { StaticJsEnvironmentRecord } from "../../../runtime/environments/StaticJsEnvironmentRecord.js";
import type { StaticJsValue } from "../../../runtime/types/StaticJsValue.js";
import type { EvaluationGenerator } from "../../EvaluationGenerator.js";

import { StaticJsEngineError } from "../../../errors/StaticJsEngineError.js";
import bindingInitialization from "../../bindings/binding-initialization.js";

export default function* forDeclarationBindingInitialization(
  node: VariableDeclaration,
  value: StaticJsValue,
  environment: StaticJsEnvironmentRecord,
): EvaluationGenerator<void> {
  const variableId = node.declarations[0].id;
  if (variableId.type === "VoidPattern") {
    // Seriously what are these???
    throw new StaticJsEngineError("Invalid left-hand side in for-in/of loop");
  }
  const lVal = variableId;

  yield* bindingInitialization(lVal, value, environment);
}
