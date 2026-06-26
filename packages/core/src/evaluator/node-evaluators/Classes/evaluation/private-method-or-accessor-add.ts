import type { StaticJsObject } from "../../../../types/StaticJsObject.js";
import type {
  StaticJsPrivateElementAccessor,
  StaticJsPrivateElementMethod,
} from "../../../../types/StaticJsPrivateElement.js";
import { EvaluationGenerator } from "../../../EvaluationGenerator.js";

export function* privateMethodOrAccessorAdd(
  o: StaticJsObject,
  method: StaticJsPrivateElementAccessor | StaticJsPrivateElementMethod,
): EvaluationGenerator<void> {
  yield* o.privateElementAddEvaluator(method);
}
