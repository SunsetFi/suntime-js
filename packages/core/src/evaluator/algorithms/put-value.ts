import {
  isStaticJsValue,
  type StaticJsValue,
} from "../../runtime/types/StaticJsValue.js";

import type { StaticJsRealm } from "../../runtime/realm/StaticJsRealm.js";

import type { StaticJsEnvironmentRecord } from "../../runtime/environments/StaticJsEnvironmentRecord.js";

import type { StaticJsReferenceRecord } from "../../runtime/references/StaticJsReferenceRecord.js";
import { isUnresolvableReference } from "../../runtime/references/is-unresolvable-reference.js";
import { isPropertyReference } from "../../runtime/references/is-property-reference.js";

import toObject from "../../runtime/algorithms/to-object.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";

import type EvaluationGenerator from "../EvaluationGenerator.js";
import toPropertyKey from "../../runtime/utils/to-property-key.js";
import { isStaticJsSymbol } from "../../runtime/index.js";

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
    yield* globalObj.setPropertyEvaluator(propertyKey, w, false);
    return;
  }

  if (isPropertyReference(v)) {
    const baseObj = yield* toObject(v.base, realm);

    // TODO: Private reference.

    const propertyKey = yield* toPropertyKey(v.referencedName, realm);

    const succeeded = yield* baseObj.setPropertyEvaluator(
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
