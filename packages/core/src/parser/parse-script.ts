import { parse as parseAst } from "@babel/parser";

import parserOptions from "./babel-parser-options.js";
import handleParseError from "./parse-error.js";

export interface ParseScriptOptions {
  topLevelAwait?: boolean;
}
export default function parseScript(
  script: string,
  { topLevelAwait = false }: ParseScriptOptions = {},
) {
  try {
    return parseAst(script, {
      ...parserOptions,
      sourceType: "script",
      allowAwaitOutsideFunction: topLevelAwait,
    });
  } catch (e) {
    handleParseError(e, "Failed to parse script");
  }
}
