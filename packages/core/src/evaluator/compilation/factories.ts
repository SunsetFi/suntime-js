import { parse, parseExpression, ParseResult } from "@babel/parser";
import { File, Expression } from "@babel/types";

import StaticJsCompilation from "./StaticJsCompilation.js";
import StaticJsCompilationImpl from "./StaticJsCompilationImpl.js";
import { ProgramCompilationOptions } from "./options.js";

export function compileProgram(
  program: string,
  opts?: ProgramCompilationOptions,
): StaticJsCompilation {
  const ast = parse(program, { sourceType: opts?.sourceType ?? "script" });
  verifyNoErrorsOrThrow(ast);
  return new StaticJsCompilationImpl(ast);
}

export function compileExpression(expression: string): StaticJsCompilation {
  const ast = parseExpression(expression);
  verifyNoErrorsOrThrow(ast);
  return new StaticJsCompilationImpl(ast);
}

function verifyNoErrorsOrThrow<T extends File | Expression>(
  parseResult: ParseResult<T>,
): void {
  if (parseResult.errors && parseResult.errors.length) {
    throw new Error(`Error parsing code: ${parseResult.errors[0].code}.`);
  }
}
