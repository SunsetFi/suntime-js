import { StaticJsEnvArray } from "../implementation/index.js";
import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";
import { StaticJsArray as IStaticJsArray } from "../interfaces/index.js";

import toStaticJsValue from "../utils/to-static-js-value.js";

export default function StaticJsArray(value: any[]): IStaticJsArray {
  if (staticJsInstanceOf(value) === "array") {
    return value as unknown as StaticJsEnvArray;
  }

  if (!Array.isArray(value)) {
    throw new Error("Not an array");
  }

  const items = value.map(toStaticJsValue);
  return new StaticJsEnvArray(items);
}
