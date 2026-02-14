import typedMerge from "../../internal/typed-merge.js";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import { isStaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { isStaticJsBoolean } from "../types/StaticJsBoolean.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";
import {
  isStaticJsNumber,
  type StaticJsNumber,
} from "../types/StaticJsNumber.js";
import { isStaticJsString } from "../types/StaticJsString.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import toPrimitive from "./to-primitive.js";

function* toNumber(
  value: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsNumber> {
  if (isStaticJsUndefined(value)) {
    return realm.types.NaN;
  }

  if (isStaticJsNull(value)) {
    return realm.types.zero;
  }

  if (isStaticJsBoolean(value)) {
    return realm.types.number(value.value ? 1 : 0);
  }

  if (isStaticJsNumber(value)) {
    return value;
  }

  if (isStaticJsString(value)) {
    return realm.types.number(Number(value.value));
  }

  // TODO: Symbol throw TypeError

  if (isStaticJsObjectLike(value)) {
    const asPrimitive = yield* toPrimitive(value, "number", realm);
    return yield* toNumber(asPrimitive, realm);
  }

  throw new StaticJsEngineError(
    // @ts-expect-error - Want to know when we get weird values.
    "Unhandled internal value type in toNumber: " + value.runtimeTypeOf,
  );
}

export default typedMerge(toNumber, {
  *js(value: StaticJsValue, realm: StaticJsRealm): EvaluationGenerator<number> {
    const numVal = yield* toNumber(value, realm);
    return numVal.value;
  },
});
