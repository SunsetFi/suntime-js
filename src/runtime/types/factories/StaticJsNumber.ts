import typedMerge from "../../../internal/typed-merge.js";

import {
  isStaticJsNumber,
  StaticJsNumber as IStaticJsNumber,
} from "../interfaces/StaticJsScalar.js";

import StaticJsEnvNumber from "../implementation/StaticJsEnvNumber.js";

function StaticJsNumber(value: number): IStaticJsNumber {
  if (isStaticJsNumber(value)) {
    return value;
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
