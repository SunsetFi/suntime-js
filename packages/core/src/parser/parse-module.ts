import { parse as parseAst } from "@babel/parser";

import parserOptions from "./babel-parser-options.js";

export default function parseModule(script: string) {
  return parseAst(script, {
    ...parserOptions,
    sourceType: "module",
  });
}
