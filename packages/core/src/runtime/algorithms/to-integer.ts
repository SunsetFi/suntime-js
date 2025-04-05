import { StaticJsValue } from "../types/index.js";

export default function toInteger(value: StaticJsValue) {
  return Math.trunc(value.toNumber());
}
