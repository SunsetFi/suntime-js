import { Completion } from "./Completion.js";

export function nameCompletionLike(value: unknown): string {
  if (Completion.Abrupt.is(value)) {
    return `AbruptCompletion [${value.type}]`;
  }

  if (value instanceof Error) {
    return value.name;
  }

  if (value && typeof value === "object") {
    return value.constructor.name;
  }

  if (value == null) {
    return String(value);
  }

  return typeof value;
}
