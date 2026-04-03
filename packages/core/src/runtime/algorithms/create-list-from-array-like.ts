import { Completion } from "../../evaluator/completions/Completion.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import { isStaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { StaticJsPropertyKey, isStaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";

import { StaticJsValue } from "../types/StaticJsValue.js";
import { toPropertyKey } from "../utils/to-property-key.js";
import { get } from "./get.js";
import lengthOfArrayLike from "./length-of-array-like.js";
import toString from "./to-string.js";

export function createListFromArrayLike(
  obj: StaticJsValue,
  validElementTypes?: "all",
): EvaluationGenerator<StaticJsValue[]>;
export function createListFromArrayLike(
  obj: StaticJsValue,
  validElementTypes: "property-key",
): EvaluationGenerator<StaticJsPropertyKey[]>;
export function* createListFromArrayLike(
  obj: StaticJsValue,
  validElementTypes: "all" | "property-key" = "all",
): EvaluationGenerator<unknown[]> {
  if (!isStaticJsObjectLike(obj)) {
    throw Completion.Throw("TypeError", "Argument must be an object");
  }

  const len = yield* lengthOfArrayLike(obj);
  const list: unknown[] = [];
  for (let index = 0; index < len; index++) {
    const indexName = String(index);
    const next = yield* get(obj, indexName);
    if (validElementTypes === "property-key") {
      if (!isStaticJsPropertyKey(next)) {
        throw Completion.Throw(
          "TypeError",
          `Element at index ${index} (${toString(next)}) is not a valid property key.`,
        );
      }
      const propertyKey = yield* toPropertyKey(next);
      list.push(propertyKey);
    } else {
      list.push(next);
    }
  }
  return list;
}
