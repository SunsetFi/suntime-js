import { Completion } from "../evaluator/completions/Completion.js";
import { Q } from "../evaluator/completions/Q.js";
import { EvaluationContext } from "../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import type { StaticJsEnvironmentRecord } from "../runtime/environments/StaticJsEnvironmentRecord.js";
import { isPrivateReference } from "../runtime/references/is-private-reference.js";
import { isPropertyReference } from "../runtime/references/is-property-reference.js";
import { isUnresolvableReference } from "../runtime/references/is-unresolvable-reference.js";
import type { StaticJsReferenceRecord } from "../runtime/references/StaticJsReferenceRecord.js";
import { isStaticJsSymbol } from "../runtime/types/StaticJsSymbol.js";
import { isStaticJsValue, type StaticJsValue } from "../runtime/types/StaticJsValue.js";

import { getThisValue } from "./get-this-value.js";
import { privateSet } from "./private-set.js";
import { set } from "./set.js";
import { toObject } from "./to-object.js";
import { toPropertyKey } from "./to-property-key.js";

export function* putValue(
  v: StaticJsReferenceRecord | StaticJsValue,
  w: StaticJsValue,
): EvaluationGenerator<void> {
  const { realm } = EvaluationContext.current;
  if (isStaticJsValue(v)) {
    throw yield* Completion.Throw.create("ReferenceError", "Invalid left-hand side in assignment");
  }

  if (isUnresolvableReference(v)) {
    if (v.strict) {
      throw yield* Completion.Throw.create("ReferenceError", `${v.referencedName} is not defined`);
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
      throw yield* Completion.Throw.create(
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
      throw yield* Completion.Throw.create("ReferenceError", `${v.referencedName} is not defined`);
    }

    return;
  }

  const envRecord = v.base as StaticJsEnvironmentRecord;
  return yield* envRecord.setMutableBindingEvaluator(v.referencedName, w, v.strict);
}
