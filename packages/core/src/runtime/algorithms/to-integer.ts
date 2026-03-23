import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import type { StaticJsNumber } from "../types/StaticJsNumber.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import toNumber from "./to-number.js";

function* toInteger(value: StaticJsValue): EvaluationGenerator<StaticJsNumber> {
  const { realm } = EvaluationContext.current;
  value = yield* toNumber(value);
  return realm.types.number(Math.trunc(value.value));
}

toInteger.js = function* js(value: StaticJsValue) {
  const number = yield* toNumber(value);
  return number.value;
};

export default toInteger;
