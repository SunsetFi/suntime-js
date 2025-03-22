import { StaticJsEnvString } from "../implementation/index.js";
import { StaticJsString as IStaticJsString } from "../interfaces/index.js";
import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";

export default function StaticJsString(value: string): IStaticJsString {
  if (staticJsInstanceOf(value) === "string") {
    return value as unknown as StaticJsEnvString;
  }

  if (typeof value !== "string") {
    throw new Error("Not a string");
  }

  return new StaticJsEnvString(value);
}
