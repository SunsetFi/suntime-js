import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { Completion } from "../../evaluator/completions/Completion.js";
import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsNumberBoxed } from "../types/implementation/primitives/StaticJsNumberBoxed.js";
import { isStaticJsBoolean } from "../types/StaticJsBoolean.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsNumber, type StaticJsNumber } from "../types/StaticJsNumber.js";
import { isStaticJsObject } from "../types/StaticJsObject.js";
import { isStaticJsString } from "../types/StaticJsString.js";
import { isStaticJsSymbol } from "../types/StaticJsSymbol.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";
import { isStaticJsValue, type StaticJsValue } from "../types/StaticJsValue.js";

import { toPrimitive } from "./to-primitive.js";

export function* toNumber(value: StaticJsValue): EvaluationGenerator<StaticJsNumber> {
  const num = yield* toNumber.js(value);
  return EvaluationContext.current.realm.types.number(num);
}

toNumber.js = function* toNumberJs(value: unknown): EvaluationGenerator<number> {
  if (value === undefined || isStaticJsUndefined(value)) {
    return Number.NaN;
  }

  if (value === null || isStaticJsNull(value)) {
    return 0;
  }

  if (typeof value === "boolean") {
    return value ? 1 : 0;
  } else if (isStaticJsBoolean(value)) {
    return value.value ? 1 : 0;
  }

  if (typeof value === "number") {
    return value;
  } else if (isStaticJsNumber(value) || value instanceof StaticJsNumberBoxed) {
    return value.value;
  }

  if (typeof value === "string") {
    return Number(value);
  } else if (isStaticJsString(value)) {
    return Number(value.value);
  }

  if (isStaticJsObject(value)) {
    const asPrimitive = yield* toPrimitive(value, "number");
    return yield* toNumber.js(asPrimitive);
  }

  if (isStaticJsSymbol(value)) {
    throw Completion.Throw("TypeError", "Cannot convert a Symbol value to a number");
  }

  if (isStaticJsValue(value)) {
    throw new StaticJsEngineError(
      "Unhandled internal value type in toNumber: " + value.runtimeTypeOf,
    );
  }

  if (typeof value === "object") {
    // Just let the engine deal with it
    // Ideally we would implement toPrimitive here, but it should be done anyway.
    return Number(value);
  }

  throw new StaticJsEngineError("Unhandled value type in toNumber: " + typeof value);
};
