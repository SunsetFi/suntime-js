import { parse } from "@babel/parser";

import type { ProgramCompilationOptions } from "./options.js";
import { verifyNoErrorsOrThrow } from "./verify-parse-result.js";
import type StaticJsCompilation from "./StaticJsCompilation.js";
import StaticJsEvalCompilation from "./StaticJsEvalCompilation.js";

export function compileProgram(
  code: string,
  _opts?: ProgramCompilationOptions,
): StaticJsCompilation {
  const ast = parse(code);
  verifyNoErrorsOrThrow(ast);
  return new StaticJsEvalCompilation(ast.program);
}
