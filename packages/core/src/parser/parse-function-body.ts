import { parse as parseAst } from "@babel/parser";
import { type Program } from "@babel/types";

import { babelParserOptions } from "./babel-parser-options.js";
import { handleParseError } from "./parse-error.js";

export function parseFunctionBody(script: string): Program {
  try {
    const parsed = parseAst(script, {
      strictMode: false,
      ...babelParserOptions,
      allowReturnOutsideFunction: true,
    });

    return parsed.program;
  } catch (e) {
    handleParseError(e, "Failed to parse function body");
  }
}
