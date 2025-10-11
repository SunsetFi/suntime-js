import StaticJsParseError from "../errors/StaticJsParseError.js";

export default function handleParseError(
  e: unknown,
  contextMessage = "Failed to parse",
): never {
  let message = contextMessage;
  if (
    e &&
    typeof e === "object" &&
    "message" in e &&
    typeof e.message === "string"
  ) {
    message += `: ${e.message}`;
  }

  // FIXME: What type of errors does @babel/parser throw?
  // Expose stuff like line/column numbers
  throw new StaticJsParseError(message);
}
