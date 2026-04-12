import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { isStaticJsObject } from "../types/StaticJsObject.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";
import { get } from "./get.js";

import isArray from "./is-array.js";
import toBoolean from "./to-boolean.js";

export default function* isConcatSpreadable(
  O: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<boolean> {
  if (!isStaticJsObject(O)) {
    return false;
  }

  const spreadable = yield* get(O, O.realm.types.symbols.isConcatSpreadable);
  if (!isStaticJsUndefined(spreadable)) {
    return yield* toBoolean.js(spreadable);
  }

  return yield* isArray(O, realm);
}
