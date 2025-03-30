import {
  isStaticJsArray,
  StaticJsArray as IStaticJsArray,
} from "../interfaces/index.js";

import StaticJsEnvArray from "../implementation/StaticJsEnvArray.js";

import fStaticJsValue from "./StaticJsValue.js";

export default function StaticJsArray(value: unknown[]): IStaticJsArray {
  if (isStaticJsArray(value)) {
    return value;
  }

  if (!Array.isArray(value)) {
    throw new Error("Not an array");
  }

  const items = value.map(fStaticJsValue);
  return new StaticJsEnvArray(items);
}
