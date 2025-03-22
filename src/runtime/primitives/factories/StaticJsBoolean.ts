import { StaticJsBoolean as IStaticJsBoolean } from "../interfaces/index.js";
import { StaticJsEnvBoolean } from "../implementation/index.js";
import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";

export default function StaticJsBoolean(value: boolean): IStaticJsBoolean {
  if (staticJsInstanceOf(value) === "boolean") {
    return value as unknown as StaticJsEnvBoolean;
  }

  if (typeof value !== "boolean") {
    throw new Error("Not a boolean");
  }

  return new StaticJsEnvBoolean(value);
}
