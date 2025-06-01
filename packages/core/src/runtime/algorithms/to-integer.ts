import type { StaticJsValue } from "../types/StaticJsValue.js";

export default function toInteger(value: StaticJsValue) {
  return Math.trunc(value.toNumber());
}
