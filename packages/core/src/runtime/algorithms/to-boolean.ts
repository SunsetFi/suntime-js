import typedMerge from "../../internal/typed-merge.js";

import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import {
  isStaticJsBoolean,
  type StaticJsBoolean,
} from "../types/StaticJsBoolean.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsNumber } from "../types/StaticJsNumber.js";
import { isStaticJsString } from "../types/StaticJsString.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

function* toBooleanJs(
  value: StaticJsValue,
  _realm: StaticJsRealm,
): EvaluationGenerator<boolean> {
  if (isStaticJsUndefined(value)) {
    return false;
  }

  if (isStaticJsNull(value)) {
    return false;
  }

  if (isStaticJsBoolean(value) && !value.value) {
    return false;
  }

  if (
    isStaticJsNumber(value) &&
    (value.value === 0 || Number.isNaN(value.value))
  ) {
    return false;
  }

  if (isStaticJsString(value) && value.value.length === 0) {
    return false;
  }

  return true;
}

export function* toBoolean(
  value: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsBoolean> {
  const result = yield* toBooleanJs(value, realm);
  return realm.types.boolean(result);
}

export default typedMerge(toBoolean, {
  *js(
    value: StaticJsValue,
    realm: StaticJsRealm,
  ): EvaluationGenerator<boolean> {
    return yield* toBooleanJs(value, realm);
  },
});
