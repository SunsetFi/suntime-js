import type { StaticJsObject } from "#types/StaticJsObject.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { call } from "#algorithms/call.js";
import { createDataPropertyOrThrow } from "#algorithms/create-data-property-or-throw.js";
import { isStaticJsPrivateName } from "#types/StaticJsPrivateName.js";

import type { StaticJsClassFieldDefinitionRecord } from "../ClassFieldDefinitionRecord.js";

import { Q } from "../../../completions/Q.js";
import { EvaluationContext } from "../../../EvaluationContext.js";
import { EvaluationGenerator } from "../../../EvaluationGenerator.js";
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
