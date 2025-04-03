import EvaluationGenerator from "../../EvaluationGenerator.js";
import { evaluateNode } from "../../node-evaluators/index.js";

import { EvaluateNodeCommand } from "../types/index.js";

export default function* executeEvaluateNodeCommand(
  command: EvaluateNodeCommand,
): EvaluationGenerator {
  const result = yield* evaluateNode(
    command.node,
    command.context,
    command.options,
  );
  return result;
}
