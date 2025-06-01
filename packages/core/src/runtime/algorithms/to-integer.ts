import { StaticJsValue } from "../types/interfaces/StaticJsValue.js";

export default function toInteger(value: StaticJsValue) {
  return Math.trunc(value.toNumber());
}
