import { parse, parseExpression } from "@babel/parser";

import { StaticJsScope } from "../environment/index.js";

import { evaluateStatements } from "./evaluate-statements.js";
import { evaluateNode } from "./node-evaluators/evaluate-node.js";
import { assertValueResult } from "./node-evaluators/index.js";

export function evaluateString(string: string, scope?: StaticJsScope): any {
  const ast = parse(string);

  if (ast.errors && ast.errors.length) {
    throw new Error(`Error parsing expression: ${ast.errors[0].code}.`);
  }

  if (ast.program.sourceType === "script") {
    const result = evaluateStatements(ast.program.body, scope);
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
  scope?: StaticJsScope,
): any {
  const ast = parseExpression(string);

  if (ast.errors && ast.errors.length) {
    throw new Error(`Error parsing expression: ${ast.errors[0].code}.`);
  }

  scope ??= new StaticJsScope();
  const result = evaluateNode(ast, scope);
  assertValueResult(result);
  if (result) {
    return result.toJs();
  }
  return undefined;
}
