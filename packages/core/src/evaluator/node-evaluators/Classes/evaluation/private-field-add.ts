import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";
import { StaticJsObject } from "../../../../runtime/types/StaticJsObject.js";
import { StaticJsPrivateName } from "../../../../runtime/types/StaticJsPrivateName.js";
import { StaticJsValue } from "../../../../runtime/types/StaticJsValue.js";
import { Q } from "../../../completions/Q.js";
import { EvaluationGenerator } from "../../../EvaluationGenerator.js";

export const privateFieldAdd = Q.makeReceiver(function* privateFieldAdd(
  _o: StaticJsObject,
  _p: StaticJsPrivateName,
  _value: StaticJsValue,
): EvaluationGenerator<void> {
  throw new StaticJsEngineError("privateFieldAdd not implemented");
});
