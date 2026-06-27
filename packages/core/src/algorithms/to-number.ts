import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { Q } from "#evaluator/completions/Q.js";
import { EvaluationContext } from "#evaluator/EvaluationContext.js";
import { isStaticJsBoolean } from "#types/StaticJsBoolean.js";
import { isStaticJsNull } from "#types/StaticJsNull.js";
import { isStaticJsNumber, type StaticJsNumber } from "#types/StaticJsNumber.js";
import { isStaticJsObject } from "#types/StaticJsObject.js";
import { isStaticJsString } from "#types/StaticJsString.js";
import { isStaticJsSymbol } from "#types/StaticJsSymbol.js";
import { isStaticJsUndefined } from "#types/StaticJsUndefined.js";
import { type StaticJsValue } from "#types/StaticJsValue.js";

import { toPrimitive } from "./to-primitive.js";

export function* toNumber(value: StaticJsValue): EvaluationGenerator<StaticJsNumber> {
  // Short circuit to not allocate a new number.
  if (isStaticJsNumber(value)) {
    return value;
  }

  const num = yield* toNumber.js(value);
  return EvaluationContext.current.realm.types.number(num);
}

toNumber.js = function* toNumberJs(value: unknown): EvaluationGenerator<number> {
  if (typeof value === "number") {
    return value;
  }

  if (isStaticJsNumber(value)) {
    return value.value;
  }

  if (isStaticJsSymbol(value) || typeof value === "symbol") {
    throw yield* Completion.Throw.create("TypeError", "Cannot convert a Symbol value to a number");
  }

  // TODO: Throw for BigInt

  if (value === undefined || isStaticJsUndefined(value)) {
    return Number.NaN;
  }

  if (value === null || isStaticJsNull(value)) {
    return 0;
  }

  if (value === false || (isStaticJsBoolean(value) && !value.value)) {
    return 0;
  }

  if (value === true || (isStaticJsBoolean(value) && value.value)) {
    return 1;
  }

  let strValue = typeof value === "string" ? value : isStaticJsString(value) ? value.value : null;
  if (strValue !== null) {
    // Algorithm StringToNumber
    return Number(strValue);
  }

  if (typeof value !== "object") {
    throw new StaticJsEngineError("Unhandled value type in toNumber: " + typeof value);
  }

  if (isStaticJsObject(value)) {
    const primitiveValue = yield* Q(toPrimitive(value, "number"));
    return yield* Q(toNumber.js(primitiveValue));
  }

  // Basic object
  // We could manually implement ToPrimitive here on the native, but whatever.
  const primitiveValue = Number(value);
  return primitiveValue;
};
