import EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

export default function* toArray(
  val: StaticJsValue,
): EvaluationGenerator<StaticJsValue[]> {
  const obj = val.toObject();

  const lengthValue = yield* obj.getPropertyEvaluator("length");
  const length = lengthValue.toNumber();

  const result: StaticJsValue[] = new Array(length);
  for (let i = 0; i < length; i++) {
    const property = String(i);
    const hasProperty = yield* obj.hasPropertyEvaluator(property);
    if (hasProperty) {
      const item = yield* obj.getPropertyEvaluator(property);
      result[i] = item;
    }
  }

  return result;
}
