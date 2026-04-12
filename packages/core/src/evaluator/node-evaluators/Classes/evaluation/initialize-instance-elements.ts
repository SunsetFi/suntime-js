import { StaticJsFunction } from "../../../../runtime/types/StaticJsFunction.js";
import { StaticJsObjectLike } from "../../../../runtime/types/StaticJsObjectLike.js";
import { EvaluationGenerator } from "../../../EvaluationGenerator.js";

export function* initializeInstanceElements(
  _o: StaticJsObjectLike,
  _constructor: StaticJsFunction,
): EvaluationGenerator<void> {
  throw new Error("initializeInstanceElements not implemented");
}
