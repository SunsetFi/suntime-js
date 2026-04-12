import { StaticJsObject } from "../../../../runtime/types/StaticJsObject.js";
import { EvaluationGenerator } from "../../../EvaluationGenerator.js";
import { StaticJsPrivateElement } from "../PrivateElement.js";

export function* privateMethodOrAccessorAdd(
  _o: StaticJsObject,
  _method: StaticJsPrivateElement,
): EvaluationGenerator<void> {
  throw new Error("privateMethodOrAccessorAdd not implemented");
}
