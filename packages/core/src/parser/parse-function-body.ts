import { parse as parseAst } from "@babel/parser";
import { type Statement } from "@babel/types";

import parserOptions from "./babel-parser-options.js";
import handleParseError from "./parse-error.js";

export default function parseFunctionBody(script: string): Statement[] {
  try {
    const parsed = parseAst(script, {
      ...parserOptions,
      allowReturnOutsideFunction: true,
    });

    return parsed.program.body;
  } catch (e) {
    handleParseError(e, "Failed to parse function body");
  }
}
