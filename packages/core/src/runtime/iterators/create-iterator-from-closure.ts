import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import StaticJsGeneratorImpl from "../types/implementation/StaticJsGeneratorImpl.js";

import type { StaticJsGenerator } from "../types/StaticJsGenerator.js";
import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";

export default function* createIteratorFromClosure(
  closure: EvaluationGenerator,
  generatorBrand: string | null,
  generatorPrototype: StaticJsObjectLike,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsGenerator> {
  const generator = new StaticJsGeneratorImpl(closure, generatorBrand, generatorPrototype, realm);

  return generator;
}
