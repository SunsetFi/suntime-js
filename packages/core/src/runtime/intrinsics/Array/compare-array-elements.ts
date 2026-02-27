import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import { isStaticJsUndefined } from "../../types/StaticJsUndefined.js";
import type { StaticJsFunction } from "../../types/StaticJsFunction.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";

import isLessThan from "../../algorithms/is-less-than.js";
import toNumber from "../../algorithms/to-number.js";
import toString from "../../algorithms/to-string.js";

export default function* compareArrayElements(
  x: StaticJsValue,
  y: StaticJsValue,
  compareFn: StaticJsFunction | null,
  realm: StaticJsRealm,
): EvaluationGenerator<number> {
  const xUndef = isStaticJsUndefined(x);
  const yUndef = isStaticJsUndefined(y);

  if (xUndef && yUndef) {
    return 0;
  }

  if (xUndef) {
    return 1;
  }

  if (yUndef) {
    return -1;
  }

  if (compareFn) {
    const result = yield* compareFn.callEvaluator(realm.types.undefined, [x, y]);
    const n = yield* toNumber.js(result, realm);
    if (Number.isNaN(n)) {
      return 0;
    }

    return n;
  }

  const xString = yield* toString(x, realm);
  const yString = yield* toString(y, realm);

  const xSmaller = yield* isLessThan(xString, yString, true, realm);
  if (xSmaller === true) {
    return -1;
  }

  const ySmaller = yield* isLessThan(yString, xString, true, realm);
  if (ySmaller === true) {
    return 1;
  }

  return 0;
}
