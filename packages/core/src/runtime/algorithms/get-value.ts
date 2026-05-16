import { Completion } from "../../evaluator/completions/Completion.js";
import { Q } from "../../evaluator/completions/Q.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsEnvironmentRecord } from "../environments/StaticJsEnvironmentRecord.js";
import { isPrivateReference } from "../references/is-private-reference.js";
import { isPropertyReference } from "../references/is-property-reference.js";
import { isUnresolvableReference } from "../references/is-unresolvable-reference.js";
import type { StaticJsReferenceRecord } from "../references/StaticJsReferenceRecord.js";
import { type StaticJsPropertyKey, isStaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";
import { isStaticJsValue, type StaticJsValue } from "../types/StaticJsValue.js";

import { getThisValue } from "./get-this-value.js";
import { privateGet } from "./private-get.js";
import { toObject } from "./to-object.js";
import { toPropertyKey } from "./to-property-key.js";

export function* getValue(
  v: StaticJsReferenceRecord | StaticJsValue,
): EvaluationGenerator<StaticJsValue> {
  if (isStaticJsValue(v)) {
    return v;
  }

  if (isUnresolvableReference(v)) {
    throw Completion.Throw("ReferenceError", `${v.referencedName} is not defined`);
  }

  if (isPropertyReference(v)) {
    const baseObj = yield* toObject(v.base);

    if (isPrivateReference(v)) {
      return yield* Q(privateGet(baseObj, v.referencedName));
    }

    let propertyKey: StaticJsPropertyKey;
    if (!isStaticJsPropertyKey(v.referencedName)) {
      propertyKey = v.referencedName = yield* toPropertyKey(v.referencedName);
    } else {
      propertyKey = v.referencedName;
    }

    const receiver = yield* getThisValue(v);
    return yield* baseObj.getEvaluator(propertyKey, receiver);
  }

  const env = v.base as StaticJsEnvironmentRecord;
  return yield* env.getBindingValueEvaluator(v.referencedName, v.strict);
}
