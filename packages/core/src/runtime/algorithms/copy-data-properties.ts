import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { isStaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";
import createDataPropertyOrThrow from "./create-data-property-or-throw.js";
import { get } from "./get.js";
import toObject from "./to-object.js";

export default function* copyDataProperties(
  target: StaticJsObject,
  source: StaticJsValue,
  excludedItems: StaticJsPropertyKey[],
): EvaluationGenerator<void> {
  if (isStaticJsNull(source) || isStaticJsUndefined(source)) {
    return;
  }

  const from = yield* toObject(source);
  const keys = yield* from.ownPropertyKeysEvaluator();

  for (const nextKey of keys) {
    if (excludedItems.includes(nextKey)) {
      continue;
    }

    const desc = yield* from.getOwnPropertyEvaluator(nextKey);
    if (!desc || desc.enumerable !== true) {
      continue;
    }

    const value = yield* get(from, nextKey);
    yield* createDataPropertyOrThrow(target, nextKey, value);
  }
}
