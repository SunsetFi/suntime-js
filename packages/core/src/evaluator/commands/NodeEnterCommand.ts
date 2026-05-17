import type { Node } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import type EvaluatorCommandBase from "./EvaluatorCommandBase.js";

export interface NodeEnterCommand extends EvaluatorCommandBase {
  command: "enter-node";
  node: Node;
}

export function* NodeEnterCommand(node: Node): EvaluationGenerator<void> {
  yield {
    command: "enter-node",
    node,
  };
}
