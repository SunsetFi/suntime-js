import { VariableDeclaration, VariableDeclarator } from "@babel/types";

import {
  StaticJsEnvironment,
  StaticJsNull,
  StaticJsUndefined,
  StaticJsValue,
} from "../../environment/index.js";

import { evaluateNode } from "./evaluate-node.js";
import { assertValueResult } from "./node-evaluation-result.js";
import setLVal from "./LVal.js";

export default function variableDeclarationNodeEvaluator(
  statement: VariableDeclaration,
  env: StaticJsEnvironment,
): null {
  let variableCreator: (name: string, value: StaticJsValue) => void;
  switch (statement.kind) {
    case "const":
      variableCreator = (name, value) =>
        env.currentScope.declareConstProperty(name, value);
      break;
    case "let":
    // FIXME: In practice, var is hoisted, right?
    case "var":
      variableCreator = (name, value) =>
        env.currentScope.declareLetProperty(name, value);
      break;
    default:
      throw new Error(
        `Unsupported variable declaration kind: ${statement.kind}`,
      );
  }

  for (const declarator of statement.declarations) {
    declarationStatementEvaluator(declarator, env, variableCreator);
  }

  return null;
}

function declarationStatementEvaluator(
  declarator: VariableDeclarator,
  env: StaticJsEnvironment,
  variableCreator: (name: string, value: StaticJsValue) => void,
): void {
  let value: StaticJsValue = StaticJsUndefined();
  if (declarator.init === null) {
    value = StaticJsNull();
  } else if (declarator.init) {
    const initValue = evaluateNode(declarator.init, env);
    assertValueResult(initValue);
    value = initValue;
  }

  setLVal(declarator.id, value, env, variableCreator);
}
