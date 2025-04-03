import { isStaticJsValue } from "../interfaces/StaticJsValue.js";

export default function toPropertyKey(value: unknown): string {
  if (isStaticJsValue(value)) {
    value = value.toJs();
  }

  if (typeof value !== "string" && typeof value !== "number") {
    throw new Error("Invalid property key");
  }

  return String(value);
}
