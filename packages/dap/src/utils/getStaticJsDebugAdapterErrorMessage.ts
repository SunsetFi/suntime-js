import { isStaticJsSyntaxError } from "./isStaticJsSyntaxError.js";

export function getStaticJsDebugAdapterErrorMessage(error: unknown): string {
  if (isStaticJsSyntaxError(error)) {
    return error.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "StaticJs debug adapter request failed.";
}
