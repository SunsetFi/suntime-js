import { parse, parseExpression } from "@babel/parser";

import { StaticJsRealm } from "../runtime/index.js";

import {
  NodeEvaluationContext,
  isControlFlowEvaluationResult,
  NodeEvaluationResult,
  evaluateNode,
  setupEnvironment,
} from "./node-evaluators/index.js";

export function evaluateString(string: string, realm?: StaticJsRealm): any {
  const ast = parse(string);

  if (ast.errors && ast.errors.length) {
    throw new Error(`Error parsing expression: ${ast.errors[0].code}.`);
  }

  realm ??= new StaticJsRealm();

  if (ast.program.sourceType === "script") {
    const context: NodeEvaluationContext = {
      realm,
      env: realm.globalEnv,
    };
    setupEnvironment(ast.program, context);

    let result: NodeEvaluationResult | null = null;
    for (const statement of ast.program.body) {
      result = evaluateNode(statement, context);
      if (isControlFlowEvaluationResult(result)) {
        throw new Error("Continue and break statements must be inside loops");
      }
    }

    if (result) {
      return result.toJs();
    }

    return undefined;
  } else {
    throw new Error("Only script source type is supported.");
  }
}

export function evaluateExpressionString(
  string: string,
  realm?: StaticJsRealm,
): any {
  const ast = parseExpression(string);

  if (ast.errors && ast.errors.length) {
    throw new Error(`Error parsing expression: ${ast.errors[0].code}.`);
  }

  realm ??= new StaticJsRealm();

  const result = evaluateNode(ast, { realm, env: realm.globalEnv });
  if (isControlFlowEvaluationResult(result)) {
    throw new Error("Control flow statements are not allowed in expressions.");
  }

  if (result) {
    return result.toJs();
  }

  return undefined;
}
