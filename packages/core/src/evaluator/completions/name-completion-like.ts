export default function nameCompletionLike(value: unknown): string {
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
