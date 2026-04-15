import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { type StaticJsNumber } from "../types/StaticJsNumber.js";
import { isStaticJsString, type StaticJsString } from "../types/StaticJsString.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { toNumber } from "./to-number.js";
import { toPrimitive } from "./to-primitive.js";
import { toString } from "./to-string.js";

export function* addition(
  a: StaticJsValue,
  b: StaticJsValue,
): EvaluationGenerator<StaticJsString | StaticJsNumber> {
  const { realm } = EvaluationContext.current;
  const aPrim = yield* toPrimitive(a, "default");
  const bPrim = yield* toPrimitive(b, "default");

  if (isStaticJsString(aPrim) || isStaticJsString(bPrim)) {
    const aStr = yield* toString(aPrim);
    const bStr = yield* toString(bPrim);
    return realm.types.string(aStr.value + bStr.value);
  }

  // BigNum, if we ever do it
  const aNum = yield* toNumber(aPrim);
  const bNum = yield* toNumber(bPrim);
  return realm.types.number(aNum.value + bNum.value);
}
