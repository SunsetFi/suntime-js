import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import { StaticJsGeneratorImpl } from "../types/implementation/functions/StaticJsGeneratorImpl.js";
import type { StaticJsGenerator } from "../types/StaticJsGenerator.js";
import type { StaticJsObject } from "../types/StaticJsObject.js";

export function* createIteratorFromClosure(
  closure: EvaluationGenerator,
  generatorBrand: string | null,
  generatorPrototype: StaticJsObject,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsGenerator> {
  const callerContext = EvaluationContext.current;
  const calleeContext = callerContext.create();
  EvaluationContext.push(calleeContext);
  const generator = new StaticJsGeneratorImpl(closure, generatorBrand, realm, generatorPrototype);
  EvaluationContext.pop();
  return generator;
}
