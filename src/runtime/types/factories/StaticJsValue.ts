import { isStaticJsValue, StaticJsValue } from "../interfaces/index.js";

import StaticJsBoolean from "./StaticJsBoolean.js";
import StaticJsNumber from "./StaticJsNumber.js";
import StaticJsString from "./StaticJsString.js";
import StaticJsArray from "./StaticJsArray.js";
import StaticJsFunction from "./StaticJsFunction.js";
import StaticJsObject from "./StaticJsObject.js";
import StaticJsNull from "./StaticJsNull.js";
import StaticJsUndefined from "./StaticJsUndefined.js";

export default function toStaticJsValue(value: unknown): StaticJsValue {
  if (isStaticJsValue(value)) {
    return value;
  }

  if (typeof value === "boolean") {
    return StaticJsBoolean(value);
  } else if (typeof value === "number") {
    return StaticJsNumber(value);
  } else if (typeof value === "string") {
    return StaticJsString(value);
  } else if (Array.isArray(value)) {
    return StaticJsArray(value);
  } else if (typeof value === "function") {
    return StaticJsFunction(value.name, value);
  } else if (typeof value === "object" && value !== null) {
    return StaticJsObject(value);
  } else if (value === null) {
    return StaticJsNull();
  } else if (value === undefined) {
    return StaticJsUndefined();
  } else {
    throw new Error(`Cannot convert ${value} to StaticJsValue: Unknown type.`);
  }
}
