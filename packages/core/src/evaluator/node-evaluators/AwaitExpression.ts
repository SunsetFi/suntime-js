import { isFunction, type AwaitExpression } from "@babel/types";

import { Await } from "../../runtime/algorithms/await.js";
import { StaticJsAstFunction } from "../../runtime/types/implementation/functions/StaticJsAstFunction.js";
import { AwaitCommand } from "../commands/AwaitCommand.js";
import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Q } from "../completions/Q.js";
import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* awaitExpressionNodeEvaluator(node: AwaitExpression): EvaluationGenerator {
  const awaitable = yield* Q.val(EvaluateNodeCommand(node.argument));

  // FIXME: TEMP HACK: Starting to introduce SuspendCommand
  const currentFunc = EvaluationContext.current.function;
  if (
    currentFunc &&
    currentFunc instanceof StaticJsAstFunction &&
    isFunction(currentFunc.ecmaScriptCode) &&
    currentFunc.ecmaScriptCode.async &&
    !currentFunc.ecmaScriptCode.generator
  ) {
    return yield* Q(Await(awaitable));
  }

  return yield* AwaitCommand(awaitable);
}
