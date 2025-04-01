import EvaluationGenerator from "../../EvaluationGenerator.js";
import { evaluateNode } from "../../node-evaluators/index.js";

import { EvaluateNodeCommand } from "../types/index.js";

export default function* executeEvaluateNodeCommand(
  command: EvaluateNodeCommand,
): EvaluationGenerator {
  console.log("COMMAND", command.kind);
  const result = yield* evaluateNode(
    command.node,
    command.context,
    command.options,
  );
  console.log("RESULT", result);
  return result;
}
