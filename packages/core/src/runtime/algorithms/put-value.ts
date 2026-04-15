import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsEnvironmentRecord } from "../environments/StaticJsEnvironmentRecord.js";
import type { StaticJsReferenceRecord } from "../references/StaticJsReferenceRecord.js";

import { Completion } from "../../evaluator/completions/Completion.js";
import { Q } from "../../evaluator/completions/Q.js";
import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import { isPrivateReference } from "../references/is-private-reference.js";
import { isPropertyReference } from "../references/is-property-reference.js";
import { isUnresolvableReference } from "../references/is-unresolvable-reference.js";
import { isStaticJsSymbol } from "../types/StaticJsSymbol.js";
import { isStaticJsValue, type StaticJsValue } from "../types/StaticJsValue.js";
import { toPropertyKey } from "../utils/to-property-key.js";
import { getThisValue } from "./get-this-value.js";
import { privateSet } from "./private-set.js";
import { set } from "./set.js";
import { toObject } from "./to-object.js";

export function* putValue(
  v: StaticJsReferenceRecord | StaticJsValue,
  w: StaticJsValue,
): EvaluationGenerator<void> {
  const { realm } = EvaluationContext.current;
  if (isStaticJsValue(v)) {
    throw Completion.Throw("ReferenceError", "Invalid left-hand side in assignment");
  }

  if (isUnresolvableReference(v)) {
    if (v.strict) {
      throw Completion.Throw("ReferenceError", `${v.referencedName} is not defined`);
    }

    const propertyKey = yield* toPropertyKey(v.referencedName);

    const globalObj = realm.global;
    yield* set(globalObj, propertyKey, w, false);
    return;
  }

  if (isPropertyReference(v)) {
    const baseObj = yield* toObject(v.base);

    // TODO: Private reference.
    if (isPrivateReference(v)) {
      return yield* Q(privateSet(baseObj, v.referencedName, w));
    }

    const propertyKey = yield* toPropertyKey(v.referencedName);

    const receiver = yield* getThisValue(v);
    const succeeded = yield* baseObj.setEvaluator(propertyKey, w, receiver);

    if (!succeeded && v.strict) {
      throw Completion.Throw(
        "TypeError",
        `Cannot assign to read only property '${String(
          propertyKey,
        )}' of object '${baseObj.toString()}'`,
      );
    }

    return;
  }

  // TODO: Spec doesn't show this, but we don't suport symbols in env records.
  // This needs to be resolved...
  if (isStaticJsSymbol(v.referencedName)) {
    if (v.strict) {
      throw Completion.Throw("ReferenceError", `${v.referencedName} is not defined`);
    }

    return;
  }

  const envRecord = v.base as StaticJsEnvironmentRecord;
  return yield* envRecord.setMutableBindingEvaluator(v.referencedName, w, v.strict);
}
