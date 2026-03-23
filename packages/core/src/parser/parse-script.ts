import { parse as parseAst } from "@babel/parser";

import { babelParserOptions } from "./babel-parser-options.js";
import { handleParseError } from "./parse-error.js";

export interface ParseScriptOptions {
  topLevelAwait?: boolean;
}
export function parseScript(
  script: string,
  fileName: string,
  { topLevelAwait = false }: ParseScriptOptions = {},
) {
  try {
    return parseAst(script, {
      strictMode: false,
      ...babelParserOptions,
      sourceType: "script",
      sourceFilename: fileName,
      allowAwaitOutsideFunction: topLevelAwait,
    });
  } catch (e) {
    handleParseError(e, "Failed to parse script");
  }
}
