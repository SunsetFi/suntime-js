import { Completion } from "../../evaluator/completions/Completion.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { isStaticJsObject } from "../types/StaticJsObject.js";
import { StaticJsPropertyKey, isStaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";
import { isStaticJsString } from "../types/StaticJsString.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

import { get } from "./get.js";
import { lengthOfArrayLike } from "./length-of-array-like.js";
import { toString } from "./to-string.js";

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
  if (!isStaticJsObject(obj)) {
    throw Completion.Throw("TypeError", "Argument must be an object");
  }

  const len = yield* lengthOfArrayLike(obj);
  const list: unknown[] = [];
  for (let index = 0; index < len; index++) {
    const indexName = String(index);
    const next = yield* get(obj, indexName);
    if (validElementTypes === "property-key") {
      let key: StaticJsPropertyKey;
      if (isStaticJsString(next)) {
        key = next.value;
      } else if (isStaticJsPropertyKey(next)) {
        key = next;
      } else {
        throw Completion.Throw(
          "TypeError",
          `Element at index ${index} (${toString(next)}) is not a valid property key.`,
        );
      }
      list.push(key);
    } else {
      list.push(next);
    }
  }
  return list;
}
