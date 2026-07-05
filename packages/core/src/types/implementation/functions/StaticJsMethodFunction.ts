import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsPrivateName } from "#types/StaticJsPrivateName.js";
import type { StaticJsSymbol } from "#types/StaticJsSymbol.js";

import { isStaticJsFunction, type StaticJsFunction } from "#types/StaticJsFunction.js";
import { isStaticJsObject, type StaticJsObject } from "#types/StaticJsObject.js";

export interface StaticJsMethodFunction extends StaticJsFunction {
  sourceText: string;
  constructorKind: null | "base" | "derived";
  makeConstructor(
    writablePrototype?: boolean,
    prototype?: StaticJsObject,
  ): EvaluationGenerator<void>;
  classFieldInitializerName?: string | StaticJsSymbol | StaticJsPrivateName;
  readonly homeObject: StaticJsObject;
}

export function isStaticJsMethodFunction(value: unknown): value is StaticJsMethodFunction {
  return (
    isStaticJsFunction(value) &&
    "homeObject" in value &&
    isStaticJsObject((value as StaticJsMethodFunction).homeObject)
  );
}
