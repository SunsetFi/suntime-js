import { StaticJsObject } from "../../../../runtime/types/StaticJsObject.js";
import { Completion } from "../../../completions/Completion.js";
import { EvaluationGenerator } from "../../../EvaluationGenerator.js";
import { StaticJsClassFieldDefinitionRecord } from "../ClassFieldDefinitionRecord.js";

export function* defineField(
  _receiver: StaticJsObject,
  _fieldrecord: StaticJsClassFieldDefinitionRecord,
): EvaluationGenerator<Completion> {
  throw new Error("defineField not implemented");
}
