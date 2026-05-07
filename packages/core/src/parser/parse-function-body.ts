import { parse as parseAst } from "@babel/parser";
import { type Program } from "@babel/types";

import { babelParserOptions } from "./babel-parser-options.js";
import { handleParseError } from "./handle-parse-error.js";

export interface ParseFunctionBodyOptions {
  async?: boolean;
  generator?: boolean;
  module?: boolean;
}
export function parseFunctionBody(
  script: string,
  { async, generator, module }: ParseFunctionBodyOptions = {},
): Program {
  try {
    const parsed = parseAst(script, {
      strictMode: false,
      ...babelParserOptions,
      allowReturnOutsideFunction: true,
      ...(async ? { allowAwaitOutsideFunction: true } : {}),
      ...(generator ? { allowYieldOutsideFunction: true } : {}),
      ...(module ? { sourceType: "module" } : {}),
    });

    return parsed.program;
  } catch (e) {
    handleParseError(e, "Failed to parse function body");
  }
}
