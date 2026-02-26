import { isFunctionDeclaration, type FunctionParameter, type File } from "@babel/types";

import parserOptions from "./babel-parser-options.js";
import { parse, type ParseResult } from "@babel/parser";

const ArgumentParseErrorMessage = "Arg string terminates parameters early";
export default function parseParameters(paramStr: string): FunctionParameter[] {
  // Using a parser this way is risky as it opens us up to some sort of injection.
  // I think the checks below should be sufficient, but... this is gross...

  let paramParsed: ParseResult<File>;
  try {
    paramParsed = parse(`function foo(${paramStr}) {}`, parserOptions);
  } catch (e) {
    if (e instanceof SyntaxError) {
      // This is the error given by V8 when the parameter string is invalid, so we should match it.
      const rethrow = new SyntaxError(ArgumentParseErrorMessage);
      rethrow.cause = e;
      throw rethrow;
    }

    throw e;
  }

  if (paramParsed.program.body.length !== 1) {
    throw new SyntaxError(ArgumentParseErrorMessage);
  }

  const func = paramParsed.program.body[0];
  if (!isFunctionDeclaration(func)) {
    throw new SyntaxError(ArgumentParseErrorMessage);
  }

  return func.params;
}
