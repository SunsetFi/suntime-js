import { parseExpression as parseAst } from "@babel/parser";

import parserOptions from "./babel-parser-options.js";

export default function parseExpression(script: string) {
  return parseAst(script, {
    ...parserOptions,
  });
}
