import { parse as parseAst, ParseResult } from "@babel/parser";
import { File } from "@babel/types";

import { babelParserOptions } from "./babel-parser-options.js";
import { checkEarlyErrors } from "./early-errors.js";
import { handleParseError } from "./handle-parse-error.js";

export interface ParseScriptOptions {
  topLevelAwait?: boolean;
  strictMode?: boolean;
  evalMode?: "direct" | "indirect" | false;
}
export function parseScript(
  script: string,
  fileName: string,
  { topLevelAwait = false, strictMode = false, evalMode = false }: ParseScriptOptions = {},
): ParseResult<File> {
  try {
    const ast = parseAst(script, {
      ...babelParserOptions,
      sourceType: "script",
      strictMode,
      sourceFilename: fileName,
      allowAwaitOutsideFunction: topLevelAwait,
      // FIXME: Class private names are failing.  Babel seems to offer no way to accept them for parsing.
      // TODO: Turn on errorRecovery and perform our own EarlyErrors checks.
      // Currently, enabling this casues 65 test262 language failures, but does fix a few false errors.
      errorRecovery: evalMode !== false,
      ...(evalMode ? { allowSuperOutsideMethod: true, allowNewTargetOutsideFunction: true } : {}),
    });

    if (evalMode) {
      checkEarlyErrors(script, ast, strictMode, evalMode);
    }

    return ast;
  } catch (e) {
    handleParseError(e, "Failed to parse script");
  }
}
