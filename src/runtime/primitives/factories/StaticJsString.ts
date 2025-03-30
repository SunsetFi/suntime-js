import {
  isStaticJsString,
  StaticJsString as IStaticJsString,
} from "../interfaces/index.js";

import StaticJsEnvString from "../implementation/StaticJsEnvString.js";

export default function StaticJsString(value: string): IStaticJsString {
  if (isStaticJsString(value)) {
    return value;
  }

  if (typeof value !== "string") {
    throw new Error("Not a string");
  }

  return new StaticJsEnvString(value);
}
