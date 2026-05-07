import { parse as parseAst } from "@babel/parser";

import { babelParserOptions } from "./babel-parser-options.js";
import { handleParseError } from "./handle-parse-error.js";

export function parseModule(script: string, sourceName: string) {
  try {
    return parseAst(script, {
      ...babelParserOptions,
      sourceFilename: sourceName,
      sourceType: "module",
    });
  } catch (e) {
    handleParseError(e, "Failed to parse module");
  }
}
