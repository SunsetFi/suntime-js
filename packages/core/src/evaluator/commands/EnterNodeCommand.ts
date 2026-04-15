import type { Node } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import type EvaluatorCommandBase from "./EvaluatorCommandBase.js";

export interface EnterNodeCommand extends EvaluatorCommandBase {
  command: "enter-node";
  node: Node;
}

export function* EnterNodeCommand(node: Node): EvaluationGenerator<void> {
  yield {
    command: "enter-node",
    node,
  };
}
