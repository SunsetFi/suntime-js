import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { isStaticJsBoolean, type StaticJsBoolean } from "../types/StaticJsBoolean.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsNumber } from "../types/StaticJsNumber.js";
import { isStaticJsString } from "../types/StaticJsString.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

function* toBooleanJs(value: StaticJsValue): EvaluationGenerator<boolean> {
  if (isStaticJsUndefined(value)) {
    return false;
  }

  if (isStaticJsNull(value)) {
    return false;
  }

  if (isStaticJsBoolean(value) && !value.value) {
    return false;
  }

  // Note: Per the spec, we do NOT check boxed booleans, which result in true regardless of their value.

  if (isStaticJsNumber(value) && (value.value === 0 || Number.isNaN(value.value))) {
    return false;
  }

  if (isStaticJsString(value) && value.value.length === 0) {
    return false;
  }

  return true;
}

export function* toBoolean(value: StaticJsValue): EvaluationGenerator<StaticJsBoolean> {
  const result = yield* toBooleanJs(value);
  const { realm } = EvaluationContext.current;
  return realm.types.boolean(result);
}

toBoolean.js = toBooleanJs;
