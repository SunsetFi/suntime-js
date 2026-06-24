import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { Completion } from "../../evaluator/completions/Completion.js";
import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsPrivateName } from "../types/StaticJsPrivateName.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { call } from "./call.js";

export function* privateGet(
  o: StaticJsObject,
  p: StaticJsPrivateName,
): EvaluationGenerator<StaticJsValue> {
  const entry = yield* o.privateElementFindEvaluator(p);
  if (!entry) {
    throw yield* Completion.Throw.create("TypeError", `Cannot find private name ${p.description}`);
  }
  if (entry.kind === "field" || entry.kind === "method") {
    return entry.value;
  }

  if (entry.kind !== "accessor") {
    throw new StaticJsEngineError("Assertion error: privateGet on non-accessor private element.");
  }

  const getter = entry.get;
  if (!getter) {
    throw yield* Completion.Throw.create(
      "TypeError",
      // FIXME: What should the error message be?
      `Cannot get private name ${p.description}`,
    );
  }
  return yield* call(getter, o);
}
