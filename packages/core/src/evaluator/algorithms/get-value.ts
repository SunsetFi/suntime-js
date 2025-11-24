import {
  isStaticJsValue,
  type StaticJsValue,
} from "../../runtime/types/StaticJsValue.js";

import type { StaticJsRealm } from "../../runtime/realm/StaticJsRealm.js";

import type { StaticJsReferenceRecord } from "../../runtime/references/StaticJsReferenceRecord.js";
import { isUnresolvableReference } from "../../runtime/references/is-unresolvable-reference.js";
import { isPropertyReference } from "../../runtime/references/is-property-reference.js";

import type { StaticJsEnvironmentRecord } from "../../runtime/environments/StaticJsEnvironmentRecord.js";

import toObject from "../../runtime/algorithms/to-object.js";

import { ThrowCompletion } from "../completions/ThrowCompletion.js";

import type EvaluationGenerator from "../EvaluationGenerator.js";
import { isStaticJsSymbol } from "../../runtime/index.js";
import toPropertyKey from "../../runtime/utils/to-property-key.js";

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
