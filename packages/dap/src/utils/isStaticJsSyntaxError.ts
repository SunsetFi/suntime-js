import type { StaticJsSyntaxError } from "@suntime-js/core";

export function isStaticJsSyntaxError(error: unknown): error is StaticJsSyntaxError {
  return error instanceof Error && error.name === "StaticJsSyntaxError";
}
