import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type {
  StaticJsPropertyDescriptor,
  StaticJsPropertyDescriptorRecord,
} from "../types/StaticJsPropertyDescriptor.js";
import { validateAndApplyPropertyDescriptor } from "./validate-and-apply-property-descriptor.js";

export function* isCompatiblePropertyDescriptor(
  extensible: boolean,
  desc: StaticJsPropertyDescriptorRecord,
  current?: StaticJsPropertyDescriptor,
): EvaluationGenerator<boolean> {
  return yield* validateAndApplyPropertyDescriptor(undefined, "", extensible, desc, current);
}
