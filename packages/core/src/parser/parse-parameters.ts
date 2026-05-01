import { parse, type ParseResult } from "@babel/parser";
import { isFunctionDeclaration, type FunctionParameter, type File } from "@babel/types";

import { StaticJsSyntaxError } from "../errors/StaticJsSyntaxError.js";

import { babelParserOptions } from "./babel-parser-options.js";
import { handleParseError } from "./parse-error.js";

const ArgumentParseErrorMessage = "Arg string terminates parameters early";
export function parseParameters(paramStr: string): FunctionParameter[] {
  // Using a parser this way is risky as it opens us up to some sort of injection.
  // I think the checks below should be sufficient, but... this is gross...

  let paramParsed: ParseResult<File>;
  try {
    paramParsed = parse(`function foo(${paramStr}) {}`, babelParserOptions);
  } catch (e) {
    handleParseError(e, ArgumentParseErrorMessage);
  }

  if (paramParsed.program.body.length !== 1) {
    throw new StaticJsSyntaxError(ArgumentParseErrorMessage, {
      column: -1,
      line: -1,
      index: -1,
    });
  }

  const func = paramParsed.program.body[0];
  if (!isFunctionDeclaration(func)) {
    throw new StaticJsSyntaxError(ArgumentParseErrorMessage, {
      column: -1,
      line: -1,
      index: -1,
    });
  }

  return func.params;
}
