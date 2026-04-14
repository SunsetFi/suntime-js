import { StaticJsClassConstructorFunction } from "../types/StaticJsClassConstructorFunction.js";
import { StaticJsObject } from "../../../../runtime/types/StaticJsObject.js";
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
