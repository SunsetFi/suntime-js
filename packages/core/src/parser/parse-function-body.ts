import { parse as parseAst } from "@babel/parser";
import { type Statement } from "@babel/types";

import parserOptions from "./babel-parser-options.js";

export default function parseFunctionBody(script: string): Statement[] {
  const parsed = parseAst(script, {
    ...parserOptions,
    allowReturnOutsideFunction: true,
  });

  return parsed.program.body;
}
