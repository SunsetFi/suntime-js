import type { ParseError } from "@babel/parser";

import StaticJsSyntaxError from "../errors/StaticJsSyntaxError.js";

export default function handleParseError(
  e: unknown,
  contextMessage = "Failed to parse",
): never {
  if (!isParseError(e)) {
    throw e;
  }

  let message = contextMessage;
  if (
    e &&
    typeof e === "object" &&
    "message" in e &&
    typeof e.message === "string"
  ) {
    message += `: ${e.message}`;
  }

  const loc = hasLocation(e) ? e.loc : null;
  throw new StaticJsSyntaxError(message, loc);
}

function isParseError(e: unknown): e is ParseError {
  const asParseError = e as ParseError;
  return (
    e !== null &&
    typeof e === "object" &&
    "code" in e &&
    typeof asParseError.code === "string" &&
    "reasonCode" in e &&
    typeof asParseError.reasonCode === "string"
  );
}

function hasLocation(
  e: ParseError,
): e is ParseError & { loc: { line: number; column: number; index: number } } {
  return (
    "loc" in e &&
    e.loc !== null &&
    typeof e.loc === "object" &&
    "line" in e.loc &&
    typeof e.loc.line === "number" &&
    "column" in e.loc &&
    typeof e.loc.column === "number" &&
    "index" in e.loc &&
    typeof e.loc.index === "number"
  );
}
