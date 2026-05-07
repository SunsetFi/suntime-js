import { parseExpression as parseAst } from "@babel/parser";

import { babelParserOptions } from "./babel-parser-options.js";
import { handleParseError } from "./handle-parse-error.js";

export function parseExpression(script: string, sourceName: string) {
  try {
    return parseAst(script, {
      strictMode: false,
      ...babelParserOptions,
      sourceFilename: sourceName,
    });
  } catch (e) {
    handleParseError(e, "Failed to parse expression");
  }
}
