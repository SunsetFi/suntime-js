import { StaticJsFunction } from "../../../../runtime/types/StaticJsFunction.js";
import { StaticJsObject } from "../../../../runtime/types/StaticJsObject.js";
import { EvaluationGenerator } from "../../../EvaluationGenerator.js";

export function* initializeInstanceElements(
  _o: StaticJsObject,
  _constructor: StaticJsFunction,
): EvaluationGenerator<void> {
  throw new Error("initializeInstanceElements not implemented");
}
