import { parse as parseAst } from "@babel/parser";

import parserOptions from "./babel-parser-options.js";
import handleParseError from "./parse-error.js";

export default function parseScript(script: string) {
  try {
    return parseAst(script, {
      ...parserOptions,
      sourceType: "script",
    });
  } catch (e) {
    handleParseError(e, "Failed to parse script");
  }
}
