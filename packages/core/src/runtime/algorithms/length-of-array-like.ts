import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import toInteger from "./to-integer.js";

import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { MAX_ARRAY_LENGTH_INCLUSIVE } from "../types/StaticJsArray.js";
import { get } from "./get.js";

export default function* lengthOfArrayLike(obj: StaticJsObjectLike): EvaluationGenerator<number> {
  let lengthValue = yield* get(obj, "length");
  lengthValue = yield* toInteger(lengthValue);
  let length = lengthValue.value;

  if (Number.isNaN(length)) {
    length = 0;
  } else if (length < 0) {
    length = 0;
  }

  // Some hints about the behavior here:
  // https://issues.chromium.org/issues/42201570
  length = Math.min(length, MAX_ARRAY_LENGTH_INCLUSIVE);

  return length;
}
