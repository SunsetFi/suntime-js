import { parse as parseAst } from "@babel/parser";

import parserOptions from "./babel-parser-options.js";
import handleParseError from "./parse-error.js";

export default function parseModule(script: string) {
  try {
    return parseAst(script, {
      ...parserOptions,
      sourceType: "module",
    });
  } catch (e) {
    handleParseError(e, "Failed to parse module");
  }
}
