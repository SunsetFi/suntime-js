import { StaticJsObject } from "../../../../runtime/types/StaticJsObject.js";
import { EvaluationGenerator } from "../../../EvaluationGenerator.js";
import {
  StaticJsPrivateElementAccessor,
  StaticJsPrivateElementMethod,
} from "../../../../runtime/types/StaticJsPrivateElement.js";

export function* privateMethodOrAccessorAdd(
  o: StaticJsObject,
  method: StaticJsPrivateElementAccessor | StaticJsPrivateElementMethod,
): EvaluationGenerator<void> {
  yield* o.privateElementAddEvaluator(method);
}
