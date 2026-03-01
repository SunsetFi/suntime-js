import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import { Completion } from "../../evaluator/completions/Completion.js";
import Q from "../../evaluator/completions/Q.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import getMethod from "../algorithms/get-method.js";

import type { StaticJsValue } from "../types/StaticJsValue.js";
import { isStaticJsObjectLike } from "../types/StaticJsObjectLike.js";

import type { StaticJsIteratorRecord } from "./StaticJsIteratorRecord.js";

import getIteratorDirect from "./get-iterator-direct.js";

export default function* getIteratorFlattenable(
  obj: StaticJsValue,
  primitiveHandling: "iterate-string-primitives" | "reject-primitives",
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsIteratorRecord> {
  if (!isStaticJsObjectLike(obj)) {
    if (primitiveHandling === "reject-primitives") {
      throw Completion.Throw(
        realm.types.error("TypeError", "Value is not an object and cannot be iterated over"),
      );
    }
  }

  const method = yield* Q(getMethod(obj, realm.types.symbols.iterator, realm));

  let iterator: StaticJsValue;
  if (!method) {
    iterator = obj;
  } else {
    iterator = yield* Q(method.callEvaluator(obj, []));
  }

  if (!isStaticJsObjectLike(iterator)) {
    throw Completion.Throw(
      realm.types.error(
        "TypeError",
        "Value is not iterable and does not have an @@iterator method",
      ),
    );
  }

  return yield* Q(getIteratorDirect(iterator));
}
