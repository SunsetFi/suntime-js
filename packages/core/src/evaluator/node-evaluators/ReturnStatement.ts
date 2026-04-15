import type { ReturnStatement } from "@babel/types";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Completion } from "../completions/Completion.js";
import { Q } from "../completions/Q.js";
import { EvaluationContext } from "../EvaluationContext.js";

export default function* returnStatementNodeEvaluator(node: ReturnStatement): EvaluationGenerator {
  const { realm } = EvaluationContext.current;
  let value: StaticJsValue = realm.types.undefined;
  if (node.argument) {
    value = yield* Q.val(EvaluateNodeCommand(node.argument));
  }

  throw Completion.Return(value);
}
