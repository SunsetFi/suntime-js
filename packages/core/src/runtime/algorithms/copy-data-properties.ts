import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsObjectLike, StaticJsObjectPropertyKey } from "../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";
import toObject from "./to-object.js";
import createDataPropertyOrThrow from "./create-data-property-or-throw.js";

export default function* copyDataProperties(
  target: StaticJsObjectLike,
  source: StaticJsValue,
  excludedItems: StaticJsObjectPropertyKey[],
  realm: StaticJsRealm,
): EvaluationGenerator<void> {
  if (isStaticJsNull(source) || isStaticJsUndefined(source)) {
    return;
  }

  const from = yield* toObject(source, realm);
  const keys = yield* from.ownPropertyKeysEvaluator();

  for (const nextKey of keys) {
    if (excludedItems.includes(nextKey)) {
      continue;
    }

    const desc = yield* from.getOwnPropertyEvaluator(nextKey);
    if (!desc || desc.enumerable !== true) {
      continue;
    }

    const value = yield* from.getEvaluator(nextKey);
    yield* createDataPropertyOrThrow(target, nextKey, value, realm);
  }
}
