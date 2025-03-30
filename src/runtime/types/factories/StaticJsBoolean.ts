import {
  isStaticJsBoolean,
  StaticJsBoolean as IStaticJsBoolean,
} from "../interfaces/index.js";

import StaticJsEnvBoolean from "../implementation/StaticJsEnvBoolean.js";

export default function StaticJsBoolean(value: boolean): IStaticJsBoolean {
  if (isStaticJsBoolean(value)) {
    return value;
  }

  if (typeof value !== "boolean") {
    throw new Error("Not a boolean");
  }

  return new StaticJsEnvBoolean(value);
}
