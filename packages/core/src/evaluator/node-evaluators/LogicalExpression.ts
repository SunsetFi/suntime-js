import type { LogicalExpression } from "@babel/types";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";

import { StaticJsTypeCode } from "../../runtime/types/StaticJsTypeCode.js";
import toBoolean from "../../runtime/algorithms/to-boolean.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import { Q } from "../completions/Q.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function logicalExpressionNodeEvaluator(
  node: LogicalExpression,
): EvaluationGenerator {
  switch (node.operator) {
    case "&&":
      return logicalExpressionAnd(node);
    case "||":
      return logicalExpressionOr(node);
    case "??":
      return logicalExpressionNullishCoalescing(node);
    default:
      throw new StaticJsEngineError(`LogicalExpression operator ${node.operator} is not supported`);
  }
}

function* logicalExpressionAnd(node: LogicalExpression): EvaluationGenerator {
  const left = yield* Q.val(EvaluateNodeCommand(node.left));
  const leftBoolean = yield* toBoolean.js(left);

  if (leftBoolean) {
    const right = yield* Q.val(EvaluateNodeCommand(node.right));

    return right;
  }

  return left;
}

function* logicalExpressionOr(node: LogicalExpression): EvaluationGenerator {
  const left = yield* Q.val(EvaluateNodeCommand(node.left));
  const leftBoolean = yield* toBoolean.js(left);

  if (leftBoolean) {
    return left;
  }

  const right = yield* Q.val(EvaluateNodeCommand(node.right));

  return right;
}

function* logicalExpressionNullishCoalescing(node: LogicalExpression): EvaluationGenerator {
  const left = yield* Q.val(EvaluateNodeCommand(node.left));

  if (
    left.runtimeTypeCode === StaticJsTypeCode.Null ||
    left.runtimeTypeCode === StaticJsTypeCode.Undefined
  ) {
    const right = yield* Q.val(EvaluateNodeCommand(node.right));
    return right;
  }

  return left;
}
