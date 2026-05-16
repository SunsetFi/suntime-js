import type { UnaryExpression } from "@babel/types";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { getValue } from "../../runtime/algorithms/get-value.js";
import { toBoolean } from "../../runtime/algorithms/to-boolean.js";
import { toNumber } from "../../runtime/algorithms/to-number.js";
import { toObject } from "../../runtime/algorithms/to-object.js";
import { toPropertyKey } from "../../runtime/algorithms/to-property-key.js";
import { isPrivateReference } from "../../runtime/references/is-private-reference.js";
import { isPropertyReference } from "../../runtime/references/is-property-reference.js";
import { isSuperReference } from "../../runtime/references/is-super-reference.js";
import { isUnresolvableReference } from "../../runtime/references/is-unresolvable-reference.js";
import { isStaticJsReferenceRecord } from "../../runtime/references/StaticJsReferenceRecord.js";
import { isStaticJsValue } from "../../runtime/types/StaticJsValue.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Completion } from "../completions/Completion.js";
import { Q } from "../completions/Q.js";
import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* unaryExpressionNodeEvaluator(node: UnaryExpression): EvaluationGenerator {
  if (node.operator === "delete") {
    return yield* deleteExpressionNodeEvaluator(node);
  }

  if (node.operator === "typeof") {
    return yield* typeofExpressionNodeEvaluator(node);
  }

  // Note: In the case of 'void', this is never used.
  // But it still can have side-effects.
  const value = yield* Q.val(EvaluateNodeCommand(node.argument));

  const { types } = EvaluationContext.current.realm;
  switch (node.operator) {
    case "!": {
      const boolVal = yield* toBoolean.js(value);
      return types.boolean(!boolVal);
    }
    // I'm reasonably sure native javascript converts these to number for these operations.
    // Typescript doesn't like it though, so let's cast it ourselves.
    case "-": {
      const numberValue = yield* toNumber(value);
      return types.number(-numberValue.value);
    }
    case "+": {
      return yield* toNumber(value);
    }
    case "~": {
      const numberValue = yield* toNumber(value);
      return types.number(~numberValue.value);
    }
    case "void":
      return types.undefined;
    case "throw":
      throw Completion.Throw(value);
  }

  throw new StaticJsEngineError(`Unknown unary operator: ${node.operator}.`);
}

function* deleteExpressionNodeEvaluator(node: UnaryExpression): EvaluationGenerator {
  const { realm, strict } = EvaluationContext.current;
  const ref = yield* Q(EvaluateNodeCommand(node.argument));

  if (!isStaticJsReferenceRecord(ref)) {
    return realm.types.true;
  }

  if (isUnresolvableReference(ref)) {
    return realm.types.true;
  }

  if (isPropertyReference(ref)) {
    if (isPrivateReference(ref)) {
      throw new StaticJsEngineError("Cannot delete a private reference.");
    }

    if (isSuperReference(ref)) {
      throw Completion.Throw("ReferenceError", "Cannot delete a super reference.");
    }

    const baseObj = yield* toObject(ref.base);
    const propertyKey = yield* toPropertyKey(ref.referencedName);
    const result = yield* baseObj.deleteEvaluator(propertyKey);
    if (!result && strict) {
      throw Completion.Throw(
        "TypeError",
        `Cannot delete property ${String(propertyKey)} of object: Property is non-configurable.`,
      );
    }
    return realm.types.boolean(result);
  } else {
    const base = ref.base;
    const result = yield* base.deleteBindingEvaluator(ref.referencedName);
    return realm.types.boolean(result);
  }
}

function* typeofExpressionNodeEvaluator(node: UnaryExpression): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  const argument = node.argument;
  let value = yield* Q(EvaluateNodeCommand(argument));
  if (isStaticJsReferenceRecord(value)) {
    if (isUnresolvableReference(value)) {
      return realm.types.string("undefined");
    }

    value = yield* getValue(value);
  }

  if (isStaticJsValue(value)) {
    return realm.types.string(value.typeOf);
  } else {
    return realm.types.string("undefined");
  }
}
