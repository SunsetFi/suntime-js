import { Completion } from "../../evaluator/completions/Completion.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsObject } from "../types/StaticJsObject.js";
import { StaticJsPrivateName } from "../types/StaticJsPrivateName.js";
import { StaticJsValue } from "../types/StaticJsValue.js";
import call from "./call.js";

export function* privateSet(
  o: StaticJsObject,
  p: StaticJsPrivateName,
  value: StaticJsValue,
): EvaluationGenerator<void> {
  const entry = yield* o.privateElementFindEvaluator(p);
  if (!entry) {
    throw Completion.Throw("TypeError", `Cannot find private name ${p.description}`);
  }

  if (entry.kind === "method") {
    throw Completion.Throw("TypeError", `Cannot set private name ${p.description}: is a method`);
  }

  if (entry.kind === "field") {
    entry.value = value;
    return;
  }

  if (!entry.set) {
    throw Completion.Throw("TypeError", `Cannot set private name ${p.description}`);
  }
  yield* call(entry.set, o, [value]);
}
