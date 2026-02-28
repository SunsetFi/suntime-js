import { Completion } from "../../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../realm/index.js";
import {
  isStaticJsObjectLike,
  type StaticJsObjectLike,
  type StaticJsPropertyKey,
} from "../types/index.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";
import createDataPropertyOrThrow from "./create-data-property-or-throw.js";
import sameValue from "./same-value.js";

export default function* setterThatIgnoresPrototypeProperties(
  thisValue: StaticJsValue,
  home: StaticJsObjectLike,
  p: StaticJsPropertyKey,
  v: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<void> {
  if (!isStaticJsObjectLike(thisValue)) {
    throw Completion.Throw(realm.types.error("TypeError", "Setter called on non-object"));
  }

  if (sameValue(thisValue, home)) {
    throw Completion.Throw(
      realm.types.error(
        "TypeError",
        // ??? What is the error message?
        // Should be the same as trying to write to a non-writable property in strict mode.
        `Property ${String(p)} is not writable`,
      ),
    );
  }

  const desc = yield* thisValue.getOwnPropertyEvaluator(p);
  if (!desc) {
    yield* createDataPropertyOrThrow(thisValue, p, v, realm);
  } else {
    yield* thisValue.setEvaluator(p, v, true);
  }
}
