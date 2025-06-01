import { parse } from "@babel/parser";

import { ProgramCompilationOptions } from "./options.js";
import { verifyNoErrorsOrThrow } from "./verify-parse-result.js";
import StaticJsModuleCompilation from "./StaticJsModuleCompilation.js";

export function compileModule(code: string, _opts?: ProgramCompilationOptions) {
  const ast = parse(code, { sourceType: "module" });
  verifyNoErrorsOrThrow(ast);
  return new StaticJsModuleCompilation(ast.program);
}
