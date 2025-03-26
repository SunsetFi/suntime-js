import { StaticJsEnvArray } from "../implementation/index.js";
import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";
import { StaticJsArray as IStaticJsArray } from "../interfaces/index.js";
import { StaticJsValue as fStaticJsValue } from "../factories/index.js";

export default function StaticJsArray(value: unknown[]): IStaticJsArray {
  if (staticJsInstanceOf(value) === "array") {
    return value as unknown as StaticJsEnvArray;
  }

  if (!Array.isArray(value)) {
    throw new Error("Not an array");
  }

  const items = value.map(fStaticJsValue);
  return new StaticJsEnvArray(items);
}
