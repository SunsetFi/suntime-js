import { Completion } from "../../evaluator/completions/Completion.js";
import { Q } from "../../evaluator/completions/Q.js";
import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { call } from "../algorithms/call.js";
import { getMethod } from "../algorithms/get-method.js";
import { isStaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { getIteratorDirect } from "./get-iterator-direct.js";
import type { StaticJsIteratorRecord } from "./StaticJsIteratorRecord.js";

export function* getIteratorFlattenable(
  obj: StaticJsValue,
  primitiveHandling: "iterate-string-primitives" | "reject-primitives",
): EvaluationGenerator<StaticJsIteratorRecord> {
  const { realm } = EvaluationContext.current;
  if (!isStaticJsObject(obj)) {
    if (primitiveHandling === "reject-primitives") {
      throw Completion.Throw("TypeError", "Value is not an object and cannot be iterated over");
    }
  }

  const method = yield* Q(getMethod(obj, realm.types.symbols.iterator));

  let iterator: StaticJsValue;
  if (!method) {
    iterator = obj;
  } else {
    iterator = yield* Q(call(method, obj, []));
  }

  if (!isStaticJsObject(iterator)) {
    throw Completion.Throw(
      "TypeError",
      "Value is not iterable and does not have an @@iterator method",
    );
  }

  return yield* Q(getIteratorDirect(iterator));
}
