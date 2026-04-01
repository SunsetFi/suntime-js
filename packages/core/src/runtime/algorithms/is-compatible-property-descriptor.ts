import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsPropertyDescriptor } from "../types/StaticJsPropertyDescriptor.js";
import { validateAndApplyPropertyDescriptor } from "./validate-and-apply-property-descriptor.js";

export function* isCompatiblePropertyDescriptor(
  extensible: boolean,
  desc: Partial<StaticJsPropertyDescriptor>,
  current?: StaticJsPropertyDescriptor,
): EvaluationGenerator<boolean> {
  return yield* validateAndApplyPropertyDescriptor(undefined, "", extensible, desc, current);
}
