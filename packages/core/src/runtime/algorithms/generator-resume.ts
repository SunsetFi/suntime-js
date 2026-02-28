import { Completion } from "../../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import StaticJsGeneratorImpl from "../types/implementation/StaticJsGeneratorImpl.js";

import { createIteratorResultObject } from "../iterators/create-iterator-result-object.js";

export default function* generatorResume(
  generator: StaticJsValue,
  nextValue: StaticJsValue | null,
  generatorBrand: string | null,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObjectLike> {
  // FIXME: Support subclasses
  if (generator instanceof StaticJsGeneratorImpl === false) {
    throw Completion.Throw(
      realm.types.error("TypeError", "Generator resume called on incompatible receiver"),
    );
  }

  if (generator.generatorBrand !== generatorBrand) {
    throw Completion.Throw(
      realm.types.error("TypeError", "Generator resume called on incompatible receiver"),
    );
  }

  if (generator.generatorState === "executing") {
    throw Completion.Throw(realm.types.error("TypeError", "Generator is already running"));
  }

  const result = yield* generator.nextEvaluator(nextValue ?? realm.types.undefined);
  return yield* createIteratorResultObject(result.value, result.done, realm);
}
