import { parse as parseAst } from "@babel/parser";

import parserOptions from "./babel-parser-options.js";
import handleParseError from "./parse-error.js";

export interface ParseScriptOptions {
  topLevelAwait?: boolean;
}
export default function parseScript(
  script: string,
  fileName: string,
  { topLevelAwait = false }: ParseScriptOptions = {},
) {
  try {
    return parseAst(script, {
      strictMode: false,
      ...parserOptions,
      sourceType: "script",
      sourceFilename: fileName,
      allowAwaitOutsideFunction: topLevelAwait,
    });
  } catch (e) {
    handleParseError(e, "Failed to parse script");
  }
}
