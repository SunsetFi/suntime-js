import EvaluationGenerator from "../../../../../evaluator/EvaluationGenerator.js";
import { ThrowCompletion } from "../../../../../evaluator/completions/ThrowCompletion.js";

import { StaticJsRealm } from "../../../../realm/index.js";

import toInteger from "../../../../algorithms/to-integer.js";

import {
  MAX_ARRAY_LENGTH,
  StaticJsObjectLike,
} from "../../../../types/index.js";

export default function* getLength(
  realm: StaticJsRealm,
  obj: StaticJsObjectLike,
): EvaluationGenerator<number | ThrowCompletion> {
  const lengthValue = yield* obj.getPropertyEvaluator("length");
  let length = toInteger(lengthValue);
  if (Number.isNaN(length)) {
    length = 0;
  } else if (length < 0) {
    length = 0;
  }

  // Some hints about the behavior here:
  // https://issues.chromium.org/issues/42201570
  length = Math.min(length, MAX_ARRAY_LENGTH);

  return length;
}
