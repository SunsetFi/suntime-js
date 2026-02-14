import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import { isStaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsNumber } from "../types/StaticJsNumber.js";
import { isStaticJsString } from "../types/StaticJsString.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";
import {
  isStaticJsBoolean,
  type StaticJsBoolean,
} from "../types/StaticJsBoolean.js";
import { isStaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { isStaticJsScalar } from "../types/StaticJsScalar.js";

import strictEquality from "./strict-equality.js";
import toNumber from "./to-number.js";
import toPrimitive from "./to-primitive.js";

export default function* isLooselyEqual(
  x: StaticJsValue,
  y: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsBoolean> {
  // Same type
  if (x.runtimeTypeCode === y.runtimeTypeCode) {
    return yield* strictEquality(x, y, realm);
  }

  // Null and Undefined
  const aIsNullish = isStaticJsNull(x) || isStaticJsUndefined(x);
  const bIsNullish = isStaticJsNull(y) || isStaticJsUndefined(y);
  if (aIsNullish && bIsNullish) {
    return realm.types.true;
  }

  // Number and String
  if (isStaticJsNumber(x) && isStaticJsString(y)) {
    const bNumber = yield* toNumber(y, realm);
    return realm.types.boolean(x.value === bNumber.value);
  }
  if (isStaticJsString(x) && isStaticJsNumber(y)) {
    const aNumber = yield* toNumber(x, realm);
    return realm.types.boolean(aNumber.value === y.value);
  }

  // Boolean
  if (isStaticJsBoolean(x)) {
    const aNumber = yield* toNumber(x, realm);
    return yield* isLooselyEqual(aNumber, y, realm);
  }
  if (isStaticJsBoolean(y)) {
    const bNumber = yield* toNumber(y, realm);
    return yield* isLooselyEqual(x, bNumber, realm);
  }

  // Object and Primitive
  if (isStaticJsObjectLike(x) && isStaticJsScalar(y)) {
    const aPrimitive = yield* toPrimitive(x, undefined, realm);
    return yield* isLooselyEqual(aPrimitive, y, realm);
  }
  if (isStaticJsObjectLike(y) && isStaticJsScalar(x)) {
    const bPrimitive = yield* toPrimitive(y, undefined, realm);
    return yield* isLooselyEqual(x, bPrimitive, realm);
  }

  return realm.types.false;
}
