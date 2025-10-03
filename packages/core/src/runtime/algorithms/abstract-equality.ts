import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

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

export default function* abstractEquality(
  a: StaticJsValue,
  b: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsBoolean> {
  // Same type
  if (a.runtimeTypeOf === b.runtimeTypeOf) {
    return yield* strictEquality(a, b, realm);
  }

  // Null and Undefined
  const aIsNullish = isStaticJsNull(a) || isStaticJsUndefined(a);
  const bIsNullish = isStaticJsNull(b) || isStaticJsUndefined(b);
  if (aIsNullish && bIsNullish) {
    return realm.types.true;
  }

  // Number and String
  if (isStaticJsNumber(a) && isStaticJsString(b)) {
    const bNumber = yield* toNumber(b, realm);
    return realm.types.boolean(a.value === bNumber.value);
  }
  if (isStaticJsString(a) && isStaticJsNumber(b)) {
    const aNumber = yield* toNumber(a, realm);
    return realm.types.boolean(aNumber.value === b.value);
  }

  // Boolean
  if (isStaticJsBoolean(a)) {
    const aNumber = yield* toNumber(a, realm);
    return yield* abstractEquality(aNumber, b, realm);
  }
  if (isStaticJsBoolean(b)) {
    const bNumber = yield* toNumber(b, realm);
    return yield* abstractEquality(a, bNumber, realm);
  }

  // Object and Primitive
  if (isStaticJsObjectLike(a) && isStaticJsScalar(b)) {
    const aPrimitive = yield* toPrimitive(a, "number", realm);
    return yield* abstractEquality(aPrimitive, b, realm);
  }
  if (isStaticJsObjectLike(b) && isStaticJsScalar(a)) {
    const bPrimitive = yield* toPrimitive(b, "number", realm);
    return yield* abstractEquality(a, bPrimitive, realm);
  }

  return realm.types.false;
}
