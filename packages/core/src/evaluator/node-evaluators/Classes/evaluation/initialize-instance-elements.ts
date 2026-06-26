import type { StaticJsObject } from "#types/StaticJsObject.js";

import { StaticJsClassConstructorFunction } from "#types/implementation/functions/StaticJsClassConstructorFunction.js";

import { Q } from "../../../completions/Q.js";
import { EvaluationGenerator } from "../../../EvaluationGenerator.js";
import { defineField } from "./define-field.js";
import { privateMethodOrAccessorAdd } from "./private-method-or-accessor-add.js";

export const initializeInstanceElements = Q.makeReceiver(function* initializeInstanceElements(
  o: StaticJsObject,
  constructor: StaticJsClassConstructorFunction,
): EvaluationGenerator<void> {
  for (const method of constructor.privateMethods) {
    yield* Q(privateMethodOrAccessorAdd(o, method));
  }

  for (const fieldRecord of constructor.fields) {
    yield* Q(defineField(o, fieldRecord));
  }
});
