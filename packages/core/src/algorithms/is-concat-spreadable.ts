import type { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import { isStaticJsObject } from "../runtime/types/StaticJsObject.js";
import { isStaticJsUndefined } from "../runtime/types/StaticJsUndefined.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

import { get } from "./get.js";
import { isArray } from "./is-array.js";
import { toBoolean } from "./to-boolean.js";

export function* isConcatSpreadable(O: StaticJsValue): EvaluationGenerator<boolean> {
  if (!isStaticJsObject(O)) {
    return false;
  }

  const spreadable = yield* get(O, O.realm.types.symbols.isConcatSpreadable);
  if (!isStaticJsUndefined(spreadable)) {
    return yield* toBoolean.js(spreadable);
  }

  return yield* isArray(O);
}
