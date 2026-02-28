import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { isStaticJsValue, type StaticJsValue } from "../types/StaticJsValue.js";
import {
  type StaticJsPropertyKey,
  isStaticJsPropertyKey,
} from "../types/StaticJsObjectLike.js";

import type { StaticJsReferenceRecord } from "../references/StaticJsReferenceRecord.js";
import { isUnresolvableReference } from "../references/is-unresolvable-reference.js";
import { isPropertyReference } from "../references/is-property-reference.js";

import type { StaticJsEnvironmentRecord } from "../environments/StaticJsEnvironmentRecord.js";

import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import { Completion } from "../../evaluator/completions/Completion.js";

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
    throw Completion.Throw(
      realm.types.error("ReferenceError", `${v.referencedName} is not defined`),
    );
  }

  if (isPropertyReference(v)) {
    const baseObj = yield* toObject(v.base, realm);

    // TODO: Private references

    let propertyKey: StaticJsPropertyKey;
    if (!isStaticJsPropertyKey(v.referencedName)) {
      propertyKey = v.referencedName = yield* toPropertyKey(
        v.referencedName,
        realm,
      );
    } else {
      propertyKey = v.referencedName;
    }

    return yield* baseObj.getEvaluator(propertyKey);
  }

  const env = v.base as StaticJsEnvironmentRecord;
  return yield* env.getBindingValueEvaluator(v.referencedName, v.strict);
}
