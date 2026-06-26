import { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import type { StaticJsString } from "../types/StaticJsString.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { requireObjectCoercible } from "./require-object-coercible.js";
import { toString } from "./to-string.js";

export function* trimString(
  string: StaticJsValue,
  where: "start" | "end" | "start+end",
): EvaluationGenerator<StaticJsString> {
  yield* requireObjectCoercible(string);
  requireObjectCoercible.enforce(string);

  const str = yield* toString(string);

  let trimmedString: string;
  if (where === "start") {
    trimmedString = str.value.trimStart();
  } else if (where === "end") {
    trimmedString = str.value.trimEnd();
  } else {
    trimmedString = str.value.trim();
  }

  return str.realm.types.string(trimmedString);
}
