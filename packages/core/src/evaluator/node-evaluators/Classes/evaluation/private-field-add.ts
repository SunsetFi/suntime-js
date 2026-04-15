import { StaticJsObject } from "../../../../runtime/types/StaticJsObject.js";
import { staticJsPrivateElementField } from "../../../../runtime/types/StaticJsPrivateElement.js";
import { StaticJsPrivateName } from "../../../../runtime/types/StaticJsPrivateName.js";
import { StaticJsValue } from "../../../../runtime/types/StaticJsValue.js";
import { Q } from "../../../completions/Q.js";
import { EvaluationGenerator } from "../../../EvaluationGenerator.js";

export const privateFieldAdd = Q.makeReceiver(function* privateFieldAdd(
  o: StaticJsObject,
  p: StaticJsPrivateName,
  value: StaticJsValue,
): EvaluationGenerator<void> {
  yield* o.privateElementAddEvaluator(staticJsPrivateElementField(p, value));
});
