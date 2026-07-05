import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsGenerator } from "#types/StaticJsGenerator.js";
import type { StaticJsObject } from "#types/StaticJsObject.js";

import { EvaluationContext } from "#evaluator/EvaluationContext.js";
import { StaticJsGeneratorImpl } from "#types/implementation/functions/StaticJsGeneratorImpl.js";

export function* createIteratorFromClosure(
  closure: EvaluationGenerator,
  generatorBrand: string | null,
  generatorPrototype: StaticJsObject,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsGenerator> {
  const callerContext = EvaluationContext.current;
  const calleeContext = EvaluationContext.createRootContext(
    callerContext.scriptOrModule,
    callerContext.strict,
    callerContext.realm,
  );
  EvaluationContext.push(calleeContext);
  const generator = StaticJsGeneratorImpl.create({
    generatorBody: closure,
    generatorBrand,
    realm,
    prototype: generatorPrototype,
  });
  EvaluationContext.pop();
  return generator;
}
