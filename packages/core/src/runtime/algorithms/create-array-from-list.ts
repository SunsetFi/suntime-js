import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsArray } from "../types/StaticJsArray.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

import { arrayCreate } from "./array-create.js";
import { createDataPropertyOrThrow } from "./create-data-property-or-throw.js";

export function* createArrayFromList(
  elements: StaticJsValue[],
): EvaluationGenerator<StaticJsArray> {
  const array = yield* arrayCreate(0);
  let n = 0;
  for (const e of elements) {
    yield* createDataPropertyOrThrow(array, n.toString(), e);
    n++;
  }
  return array;
}
