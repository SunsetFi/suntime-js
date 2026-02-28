export default function nameCompletionLike(value: unknown): string {
  if (value instanceof Error) {
    return value.name;
  }

  if (value && typeof value === "object") {
    return value.constructor.name;
  }

  return typeof value;
}
