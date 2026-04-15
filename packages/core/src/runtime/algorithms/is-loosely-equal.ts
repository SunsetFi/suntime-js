import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import { isStaticJsBoolean, type StaticJsBoolean } from "../types/StaticJsBoolean.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsNumber } from "../types/StaticJsNumber.js";
import { isStaticJsObject } from "../types/StaticJsObject.js";
import { isStaticJsScalar } from "../types/StaticJsScalar.js";
import { isStaticJsString } from "../types/StaticJsString.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { strictEquality } from "./strict-equality.js";
import { toNumber } from "./to-number.js";
import { toPrimitive } from "./to-primitive.js";

export function* isLooselyEqual(
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
    const bNumber = yield* toNumber(y);
    return realm.types.boolean(x.value === bNumber.value);
  }
  if (isStaticJsString(x) && isStaticJsNumber(y)) {
    const aNumber = yield* toNumber(x);
    return realm.types.boolean(aNumber.value === y.value);
  }

  // Boolean
  if (isStaticJsBoolean(x)) {
    const aNumber = yield* toNumber(x);
    return yield* isLooselyEqual(aNumber, y, realm);
  }
  if (isStaticJsBoolean(y)) {
    const bNumber = yield* toNumber(y);
    return yield* isLooselyEqual(x, bNumber, realm);
  }

  // Object and Primitive
  if (isStaticJsObject(x) && isStaticJsScalar(y)) {
    const aPrimitive = yield* toPrimitive(x, undefined);
    return yield* isLooselyEqual(aPrimitive, y, realm);
  }
  if (isStaticJsObject(y) && isStaticJsScalar(x)) {
    const bPrimitive = yield* toPrimitive(y, undefined);
    return yield* isLooselyEqual(x, bPrimitive, realm);
  }

  return realm.types.false;
}
