import {
  StaticJsBoolean,
  StaticJsNumber,
  StaticJsString,
  StaticJsArray,
  StaticJsFunction,
  StaticJsObject,
  StaticJsNull,
  StaticJsUndefined,
} from "../factories/index.js";

import { isStaticJsValue, StaticJsValue } from "../interfaces/index.js";

export default function toStaticJsValue(value: any): StaticJsValue {
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
