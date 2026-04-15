import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { isStaticJsBoolean } from "../types/StaticJsBoolean.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsNumber, type StaticJsNumber } from "../types/StaticJsNumber.js";
import { isStaticJsObject } from "../types/StaticJsObject.js";
import { isStaticJsString } from "../types/StaticJsString.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";
import { toPrimitive } from "./to-primitive.js";

export function* toNumber(value: StaticJsValue): EvaluationGenerator<StaticJsNumber> {
  const { types } = EvaluationContext.current.realm;
  if (isStaticJsUndefined(value)) {
    return types.NaN;
  }

  if (isStaticJsNull(value)) {
    return types.zero;
  }

  if (isStaticJsBoolean(value)) {
    return types.number(value.value ? 1 : 0);
  }

  if (isStaticJsNumber(value)) {
    return value;
  }

  if (isStaticJsString(value)) {
    return types.number(Number(value.value));
  }

  // TODO: Symbol throw TypeError

  if (isStaticJsObject(value)) {
    const asPrimitive = yield* toPrimitive(value, "number");
    return yield* toNumber(asPrimitive);
  }

  throw new StaticJsEngineError(
    // @ts-expect-error - Want to know when we get weird values.
    "Unhandled internal value type in toNumber: " + value.runtimeTypeOf,
  );
}

toNumber.js = function* toNumberJs(value: StaticJsValue): EvaluationGenerator<number> {
  const numVal = yield* toNumber(value);
  return numVal.value;
};
