import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import type { StaticJsScalar } from "../types/StaticJsScalar.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { isStaticJsString } from "../types/StaticJsString.js";
import toNumber from "./to-number.js";
import toPrimitive from "./to-primitive.js";

export default function* isLessThan(
  x: StaticJsValue,
  y: StaticJsValue,
  leftFirst: boolean,
  _realm: StaticJsRealm,
): EvaluationGenerator<boolean | undefined> {
  let px: StaticJsScalar;
  let py: StaticJsScalar;

  if (leftFirst) {
    px = yield* toPrimitive(x, "number");
    py = yield* toPrimitive(y, "number");
  } else {
    py = yield* toPrimitive(y, "number");
    px = yield* toPrimitive(x, "number");
  }

  if (isStaticJsString(px) && isStaticJsString(py)) {
    return px.value < py.value;
  }

  const nx = yield* toNumber(px);
  const ny = yield* toNumber(py);

  if (isNaN(nx.value) || isNaN(ny.value)) {
    return undefined;
  }

  return nx.value < ny.value;
}
