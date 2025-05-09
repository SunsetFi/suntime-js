import { parse, parseExpression, ParseResult } from "@babel/parser";
import { File, Expression } from "@babel/types";

import StaticJsCompilation from "./StaticJsCompilation.js";
import StaticJsEvalCompilation from "./StaticJsEvalCompilation.js";
import { ProgramCompilationOptions } from "./options.js";
import StaticJsParseError from "../StaticJsParseError.js";
import StaticJsModuleCompilation from "./StaticJsModuleCompilation.js";

export function compileProgram(
  code: string,
  _opts?: ProgramCompilationOptions,
): StaticJsCompilation {
  const ast = parse(code);
  verifyNoErrorsOrThrow(ast);
  return new StaticJsEvalCompilation(ast.program);
}

export function compileModule(code: string, _opts?: ProgramCompilationOptions) {
  const ast = parse(code, { sourceType: "module" });
  verifyNoErrorsOrThrow(ast);
  return new StaticJsModuleCompilation(ast.program);
}

export function compileExpression(expression: string): StaticJsCompilation {
  const ast = parseExpression(expression);
  verifyNoErrorsOrThrow(ast);
  return new StaticJsEvalCompilation(ast);
}

function verifyNoErrorsOrThrow<T extends File | Expression>(
  parseResult: ParseResult<T>,
): void {
  if (parseResult.errors && parseResult.errors.length) {
    throw new StaticJsParseError(
      `Error parsing code: ${parseResult.errors[0].code}.`,
    );
  }
}
