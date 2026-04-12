import { Completion } from "../../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import { isStaticJsObject, type StaticJsObject } from "../types/index.js";
import { StaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import createDataPropertyOrThrow from "./create-data-property-or-throw.js";
import sameValue from "./same-value.js";
import { set } from "./set.js";

export default function* setterThatIgnoresPrototypeProperties(
  thisValue: StaticJsValue,
  home: StaticJsObject,
  p: StaticJsPropertyKey,
  v: StaticJsValue,
): EvaluationGenerator<void> {
  if (!isStaticJsObject(thisValue)) {
    throw Completion.Throw("TypeError", "Setter called on non-object");
  }

  if (sameValue(thisValue, home)) {
    throw Completion.Throw(
      "TypeError",
      // ??? What is the error message?
      // Should be the same as trying to write to a non-writable property in strict mode.
      `Property ${String(p)} is not writable`,
    );
  }

  const desc = yield* thisValue.getOwnPropertyEvaluator(p);
  if (!desc) {
    yield* createDataPropertyOrThrow(thisValue, p, v);
  } else {
    yield* set(thisValue, p, v, true);
  }
}
