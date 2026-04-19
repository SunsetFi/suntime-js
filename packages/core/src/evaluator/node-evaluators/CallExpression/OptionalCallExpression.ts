import { OptionalCallExpression } from "@babel/types";

import { StaticJsEngineError } from "../../../errors/StaticJsEngineError.js";
import { getValue } from "../../../runtime/algorithms/get-value.js";
import { isStaticJsNull } from "../../../runtime/types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../../runtime/types/StaticJsUndefined.js";
import { EvaluateNodeCommand } from "../../commands/EvaluateNodeCommand.js";
import { Q } from "../../completions/Q.js";
import { EvaluationContext } from "../../EvaluationContext.js";
import { EvaluationGenerator } from "../../EvaluationGenerator.js";

import { evaluateCall } from "./EvaluateCall.js";

export default function* optionalCallExpressionNodeEvaluator(
  node: OptionalCallExpression,
): EvaluationGenerator {
  const baseReference = yield* Q(EvaluateNodeCommand(node.callee));
  if (!baseReference) {
    throw new StaticJsEngineError("OptionalCallExpression callee evaluated to no value");
  }

  const baseValue = yield* getValue(baseReference);
  if (isStaticJsUndefined(baseValue) || isStaticJsNull(baseValue)) {
    return EvaluationContext.current.realm.types.undefined;
  }
  return yield* evaluateCall(node, baseValue, baseReference, node.arguments);
}
