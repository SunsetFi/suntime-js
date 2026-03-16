import { parseExpression as parseAst } from "@babel/parser";

import parserOptions from "./babel-parser-options.js";
import handleParseError from "./parse-error.js";

export default function parseExpression(script: string, sourceName: string) {
  try {
    return parseAst(script, {
      strictMode: false,
      ...parserOptions,
      sourceFilename: sourceName,
    });
  } catch (e) {
    handleParseError(e, "Failed to parse expression");
  }
}
