import type { StaticJsObject } from "#types/StaticJsObject.js";
import type { StaticJsPrivateName } from "#types/StaticJsPrivateName.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { staticJsPrivateElementField } from "#types/StaticJsPrivateElement.js";

import { Q } from "../../../completions/Q.js";
import { EvaluationGenerator } from "../../../EvaluationGenerator.js";

export const privateFieldAdd = Q.makeReceiver(function* privateFieldAdd(
  o: StaticJsObject,
  p: StaticJsPrivateName,
  value: StaticJsValue,
): EvaluationGenerator<void> {
  yield* o.privateElementAddEvaluator(staticJsPrivateElementField(p, value));
});
