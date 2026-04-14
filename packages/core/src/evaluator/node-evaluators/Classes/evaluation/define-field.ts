import call from "../../../../runtime/algorithms/call.js";
import createDataPropertyOrThrow from "../../../../runtime/algorithms/create-data-property-or-throw.js";
import { isStaticJsPrivateName } from "../../../../runtime/environments/implementation/StaticJsPrivateEnvironmentRecord.js";
import { StaticJsObject } from "../../../../runtime/types/StaticJsObject.js";
import { StaticJsValue } from "../../../../runtime/types/StaticJsValue.js";
import { Q } from "../../../completions/Q.js";
import { EvaluationContext } from "../../../EvaluationContext.js";
import { EvaluationGenerator } from "../../../EvaluationGenerator.js";
import { StaticJsClassFieldDefinitionRecord } from "../ClassFieldDefinitionRecord.js";
import { privateFieldAdd } from "./private-field-add.js";

export const defineField = Q.makeReceiver(function* defineField(
  receiver: StaticJsObject,
  fieldrecord: StaticJsClassFieldDefinitionRecord,
): EvaluationGenerator<void> {
  const { name: fieldName, initializer } = fieldrecord;

  let initValue: StaticJsValue;
  if (initializer) {
    initValue = yield* Q(call(initializer, receiver));
  } else {
    initValue = EvaluationContext.current.realm.types.undefined;
  }

  if (isStaticJsPrivateName(fieldName)) {
    yield* Q(privateFieldAdd(receiver, fieldName, initValue));
  } else {
    yield* Q(createDataPropertyOrThrow(receiver, fieldName, initValue));
  }
});
