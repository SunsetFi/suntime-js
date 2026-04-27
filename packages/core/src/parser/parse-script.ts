import { parse as parseAst } from "@babel/parser";

import { babelParserOptions } from "./babel-parser-options.js";
import { handleParseError } from "./parse-error.js";

export interface ParseScriptOptions {
  topLevelAwait?: boolean;
  strictMode?: boolean;
  permissive?: boolean;
}
export function parseScript(
  script: string,
  fileName: string,
  { topLevelAwait = false, strictMode = false, permissive = false }: ParseScriptOptions = {},
) {
  try {
    return parseAst(script, {
      ...babelParserOptions,
      sourceType: "script",
      strictMode,
      sourceFilename: fileName,
      allowAwaitOutsideFunction: topLevelAwait,
      // Probably need more here.
      ...(permissive ? { allowSuperOutsideMethod: true, allowNewTargetOutsideFunction: true } : {}),
    });
  } catch (e) {
    handleParseError(e, "Failed to parse script");
  }
}
