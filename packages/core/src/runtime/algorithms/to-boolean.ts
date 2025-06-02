import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";
import typedMerge from "../../internal/typed-merge.js";
import type { StaticJsRealm } from "../realm/index.js";
import {
  isStaticJsBoolean,
  type StaticJsBoolean,
} from "../types/StaticJsBoolean.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsNumber } from "../types/StaticJsNumber.js";
import { isStaticJsString } from "../types/StaticJsString.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

function* toBoolean(
  value: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsBoolean> {
  if (isStaticJsUndefined(value)) {
    return realm.types.false;
  }

  if (isStaticJsNull(value)) {
    return realm.types.false;
  }

  if (isStaticJsBoolean(value) && !value.value) {
    return realm.types.false;
  }

  if (
    isStaticJsNumber(value) &&
    (value.value === 0 || Number.isNaN(value.value))
  ) {
    return realm.types.false;
  }

  if (isStaticJsString(value) && value.value.length === 0) {
    return realm.types.false;
  }

  return realm.types.true;
}

export default typedMerge(toBoolean, {
  *js(
    value: StaticJsValue,
    realm: StaticJsRealm,
  ): EvaluationGenerator<boolean> {
    const result = yield* toBoolean(value, realm);
    return result.value;
  },
});
