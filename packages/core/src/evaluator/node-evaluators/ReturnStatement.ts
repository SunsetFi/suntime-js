import type { ReturnStatement } from "@babel/types";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import { Completion } from "../completions/Completion.js";
import Q from "../completions/Q.js";

export default function* returnStatementNodeEvaluator(
  node: ReturnStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const { realm } = context;
  let value: StaticJsValue = realm.types.undefined;
  if (node.argument) {
    value = yield* Q.val(EvaluateNodeCommand(node.argument), realm);
  }

  throw Completion.Return(value);
}
