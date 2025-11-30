import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { isStaticJsValue, type StaticJsValue } from "../types/StaticJsValue.js";
import { isStaticJsSymbol } from "../types/StaticJsSymbol.js";

import type { StaticJsReferenceRecord } from "../references/StaticJsReferenceRecord.js";
import { isUnresolvableReference } from "../references/is-unresolvable-reference.js";
import { isPropertyReference } from "../references/is-property-reference.js";

import type { StaticJsEnvironmentRecord } from "../environments/StaticJsEnvironmentRecord.js";

import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";

import toPropertyKey from "../utils/to-property-key.js";

import toObject from "./to-object.js";

export default function* getValue(
  v: StaticJsReferenceRecord | StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsValue> {
  if (isStaticJsValue(v)) {
    return v;
  }

  if (isUnresolvableReference(v)) {
    throw new ThrowCompletion(
      realm.types.error("ReferenceError", `${v.referencedName} is not defined`),
    );
  }

  if (isPropertyReference(v)) {
    const baseObj = yield* toObject(v.base, realm);

    // TODO: Private references

    const propertyKey = yield* toPropertyKey(v.referencedName, realm);

    return yield* baseObj.getPropertyEvaluator(
      propertyKey,
      // TODO: thisObj
    );
  }

  // TODO: Spec doesn't show this, but we don't suport symbols in env records.
  // This needs to be resolved...
  if (isStaticJsSymbol(v.referencedName)) {
    if (v.strict) {
      throw new ThrowCompletion(
        realm.types.error("ReferenceError", `${name} is not defined`),
      );
    }

    return realm.types.undefined;
  }

  const env = v.base as StaticJsEnvironmentRecord;
  return yield* env.getBindingValueEvaluator(v.referencedName, v.strict);
}
