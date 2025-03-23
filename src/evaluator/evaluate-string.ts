import { parse, parseExpression } from "@babel/parser";

import { isStaticJsValue, StaticJsRealm } from "../runtime/index.js";

import EvaluationContext from "./EvaluationContext.js";
import { runUntilCompletion } from "./evaluator-runtime.js";
import { evaluateNode } from "./node-evaluators/index.js";

export function evaluateString(string: string, realm?: StaticJsRealm): any {
  const ast = parse(string);

  if (ast.errors && ast.errors.length) {
    throw new Error(`Error parsing expression: ${ast.errors[0].code}.`);
  }

  realm ??= new StaticJsRealm();

  const context: EvaluationContext = {
    realm,
    env: realm.globalEnv,
  };

  const result = runUntilCompletion(evaluateNode(ast.program, context));

  if (isStaticJsValue(result)) {
    return result.toJs();
  }

  if (result) {
    throw new Error("Control flow statements are not allowed in expressions.");
  }

  return undefined;
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

  const context: EvaluationContext = {
    realm,
    env: realm.globalEnv,
  };

  const result = runUntilCompletion(evaluateNode(ast, context));

  if (isStaticJsValue(result)) {
    return result.toJs();
  }

  if (result) {
    throw new Error("Control flow statements are not allowed in expressions.");
  }

  return undefined;
}
