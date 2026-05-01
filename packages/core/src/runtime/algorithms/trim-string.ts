import { Q } from "../../evaluator/completions/Q.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsString } from "../types/StaticJsString.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

import { requireObjectCoercable } from "./require-object-coercable.js";
import { toString } from "./to-string.js";

export function* trimString(
  string: StaticJsValue,
  where: "start" | "end" | "start+end",
): EvaluationGenerator<StaticJsString> {
  yield* Q(requireObjectCoercable(string));

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
