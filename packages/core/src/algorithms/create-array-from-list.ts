import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsArray } from "#types/StaticJsArray.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";

import { arrayCreate } from "./array-create.js";
import { createDataPropertyOrThrow } from "./create-data-property-or-throw.js";

export function* createArrayFromList(
  elements: StaticJsValue[],
): EvaluationGenerator<StaticJsArray> {
  // Guarenteed to produce our object, not a sandboxed object.
  const array = yield* arrayCreate(0);

  let n = 0;
  for (const e of elements) {
    // Safe to call synchronously, as it is acting on our object.
    yield* createDataPropertyOrThrow(array, n.toString(), e);
    n++;
  }

  return array;
}

createArrayFromList.safe = function (
  elements: StaticJsValue[],
  realm?: StaticJsRealm,
): StaticJsArray {
  // Guarenteed to produce our object, not a sandboxed object.
  const array = arrayCreate.safe(0, undefined, realm);

  let n = 0;
  for (const e of elements) {
    array.setIndexSafe(n, e);
    n++;
  }

  return array;
};
