import { parseExpression } from "@babel/parser";
import StaticJsCompilation from "./StaticJsCompilation.js";
import { verifyNoErrorsOrThrow } from "./verify-parse-result.js";
import StaticJsEvalCompilation from "./StaticJsEvalCompilation.js";

export function compileExpression(expression: string): StaticJsCompilation {
  const ast = parseExpression(expression);
  verifyNoErrorsOrThrow(ast);
  return new StaticJsEvalCompilation(ast);
}
