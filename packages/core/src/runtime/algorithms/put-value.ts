import { isStaticJsValue, type StaticJsValue } from "../types/StaticJsValue.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsEnvironmentRecord } from "../environments/StaticJsEnvironmentRecord.js";

import type { StaticJsReferenceRecord } from "../references/StaticJsReferenceRecord.js";
import { isUnresolvableReference } from "../references/is-unresolvable-reference.js";
import { isPropertyReference } from "../references/is-property-reference.js";

import toObject from "./to-object.js";

import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";

import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";
import toPropertyKey from "../utils/to-property-key.js";
import { isStaticJsSymbol } from "../index.js";

export default function* putValue(
  v: StaticJsReferenceRecord | StaticJsValue,
  w: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<void> {
  if (isStaticJsValue(v)) {
    throw new ThrowCompletion(
      realm.types.error(
        "ReferenceError",
        "Invalid left-hand side in assignment",
      ),
    );
  }

  if (isUnresolvableReference(v)) {
    if (v.strict) {
      throw new ThrowCompletion(
        realm.types.error(
          "ReferenceError",
          `${v.referencedName} is not defined`,
        ),
      );
    }

    const propertyKey = yield* toPropertyKey(v.referencedName, realm);

    const globalObj = realm.global;
    yield* globalObj.setEvaluator(propertyKey, w, false);
    return;
  }

  if (isPropertyReference(v)) {
    const baseObj = yield* toObject(v.base, realm);

    // TODO: Private reference.

    const propertyKey = yield* toPropertyKey(v.referencedName, realm);

    const succeeded = yield* baseObj.setEvaluator(
      propertyKey,
      w,
      v.strict,
      // TODO: This value
    );

    if (!succeeded && v.strict) {
      throw new ThrowCompletion(
        realm.types.error(
          "TypeError",
          `Cannot assign to read only property '${String(
            propertyKey,
          )}' of object '${baseObj.toString()}'`,
        ),
      );
    }

    return;
  }

  // TODO: Spec doesn't show this, but we don't suport symbols in env records.
  // This needs to be resolved...
  if (isStaticJsSymbol(v.referencedName)) {
    if (v.strict) {
      throw new ThrowCompletion(
        realm.types.error("ReferenceError", `${name} is not defined`),
      );
    }

    return;
  }

  const envRecord = v.base as StaticJsEnvironmentRecord;
  return yield* envRecord.setMutableBindingEvaluator(
    v.referencedName,
    w,
    v.strict,
  );
}
