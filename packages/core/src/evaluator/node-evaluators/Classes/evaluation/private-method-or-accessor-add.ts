import type { StaticJsObject } from "../../../../runtime/types/StaticJsObject.js";
import type {
  StaticJsPrivateElementAccessor,
  StaticJsPrivateElementMethod,
} from "../../../../runtime/types/StaticJsPrivateElement.js";
import { EvaluationGenerator } from "../../../EvaluationGenerator.js";

export function* privateMethodOrAccessorAdd(
  o: StaticJsObject,
  method: StaticJsPrivateElementAccessor | StaticJsPrivateElementMethod,
): EvaluationGenerator<void> {
  yield* o.privateElementAddEvaluator(method);
}
