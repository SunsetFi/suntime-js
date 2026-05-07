import { ParseError } from "@babel/parser";
import { Node } from "@babel/types";

export function parseError(message: string, node: Node): ParseError {
  const err = new SyntaxError(message) as ParseError;
  err.code = "BABEL_PARSER_SYNTAX_ERROR";
  err.details = {};
  err.loc = {
    line: node.loc?.start.line ?? 0,
    column: node.loc?.start.column ?? 0,
    index: node.start ?? 0,
  };
  err.pos = node.start ?? 0;
  err.reasonCode = "EarlyError";
  return err;
}
