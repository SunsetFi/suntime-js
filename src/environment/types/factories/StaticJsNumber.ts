import typedMerge from "../../../internal/typed-merge.js";

import { StaticJsEnvNumber } from "../implementation/index.js";
import { StaticJsNumber as IStaticJsNumber } from "../interfaces/index.js";

import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";

function StaticJsNumber(value: number): IStaticJsNumber {
  if (staticJsInstanceOf(value) === "number") {
    return value as unknown as StaticJsEnvNumber;
  }

  if (typeof value !== "number") {
    throw new Error("Not a number");
  }

  return new StaticJsEnvNumber(value);
}

export default typedMerge(StaticJsNumber, {
  Zero: StaticJsNumber(0),
  Infinity: StaticJsNumber(Infinity),
  NaN: StaticJsNumber(Number.NaN),
});
