import { isStaticJsValue } from "../StaticJsValue.js";

export default function toPropertyKey(value: unknown): string {
  if (!isStaticJsValue(value)) {
    return String(value);
  }

  return value.toString();
}
