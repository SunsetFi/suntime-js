import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { isStaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import isArray from "./is-array.js";
import toBoolean from "./to-boolean.js";

export default function* isConcatSpreadable(
  O: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<boolean> {
  if (!isStaticJsObjectLike(O)) {
    return false;
  }

  const spreadable = yield* O.getEvaluator(O.realm.types.symbols.isConcatSpreadable);
  if (!isStaticJsUndefined(spreadable)) {
    return yield* toBoolean.js(spreadable, realm);
  }

  return yield* isArray(O, realm);
}
