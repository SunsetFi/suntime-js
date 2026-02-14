import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { type StaticJsNumber } from "../types/StaticJsNumber.js";
import {
  isStaticJsString,
  type StaticJsString,
} from "../types/StaticJsString.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";
import toNumber from "./to-number.js";

import toPrimitive from "./to-primitive.js";
import toString from "./to-string.js";

export default function* addition(
  a: StaticJsValue,
  b: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsString | StaticJsNumber> {
  const aPrim = yield* toPrimitive(a, "default", realm);
  const bPrim = yield* toPrimitive(b, "default", realm);

  if (isStaticJsString(aPrim) || isStaticJsString(bPrim)) {
    const aStr = yield* toString(aPrim, realm);
    const bStr = yield* toString(bPrim, realm);
    return realm.types.string(aStr.value + bStr.value);
  }

  // BigNum, if we ever do it
  const aNum = yield* toNumber(aPrim, realm);
  const bNum = yield* toNumber(bPrim, realm);
  return realm.types.number(aNum.value + bNum.value);
}
