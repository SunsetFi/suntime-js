import { StaticJsObjectLike } from "../../../../runtime/types/StaticJsObjectLike.js";
import { Completion } from "../../../completions/Completion.js";
import { EvaluationGenerator } from "../../../EvaluationGenerator.js";
import { StaticJsClassFieldDefinitionRecord } from "../ClassFieldDefinitionRecord.js";

export function* defineField(
  _receiver: StaticJsObjectLike,
  _fieldrecord: StaticJsClassFieldDefinitionRecord,
): EvaluationGenerator<Completion> {
  throw new Error("defineField not implemented");
}
