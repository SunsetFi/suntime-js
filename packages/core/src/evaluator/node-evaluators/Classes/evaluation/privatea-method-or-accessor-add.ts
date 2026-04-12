import { StaticJsObjectLike } from "../../../../runtime/types/StaticJsObjectLike.js";
import { EvaluationGenerator } from "../../../EvaluationGenerator.js";
import { StaticJsPrivateElement } from "../PrivateElement.js";

export function* privateMethodOrAccessorAdd(
  _o: StaticJsObjectLike,
  _method: StaticJsPrivateElement,
): EvaluationGenerator<void> {
  throw new Error("privateMethodOrAccessorAdd not implemented");
}
