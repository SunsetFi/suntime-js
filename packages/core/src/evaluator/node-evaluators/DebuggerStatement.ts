import { DebuggerStatement } from "@babel/types";

import { EvaluationGenerator } from "../EvaluationGenerator.js";

export default function* debuggerStatementNodeEvaluator(
  _node: DebuggerStatement,
): EvaluationGenerator {
  // We could yield a debug instruction up the chain, but inspecting the current node may be enough.
  return null;
}
