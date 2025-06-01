import type { ParseResult } from "@babel/parser";
import type { File, Expression } from "@babel/types";

import StaticJsParseError from "../../errors/StaticJsParseError.js";

export function verifyNoErrorsOrThrow<T extends File | Expression>(
  parseResult: ParseResult<T>,
): void {
  if (parseResult.errors && parseResult.errors.length) {
    throw new StaticJsParseError(
      `Error parsing code: ${parseResult.errors[0].code}.`,
    );
  }
}
