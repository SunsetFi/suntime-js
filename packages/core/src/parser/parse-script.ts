import { parse as parseAst } from "@babel/parser";

import parserOptions from "./babel-parser-options.js";

export default function parseScript(script: string) {
  return parseAst(script, {
    ...parserOptions,
    sourceType: "script",
  });
}
