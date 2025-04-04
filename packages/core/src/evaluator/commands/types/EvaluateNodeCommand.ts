import { Node } from "@babel/types";

import EvaluationContext from "../../EvaluationContext.js";
import EvaluationGenerator from "../../EvaluationGenerator.js";
import { EvaluateNodeOptions } from "../../node-evaluators/index.js";

import EvaluatorCommandBase from "./EvaluatorCommandBase.js";

export interface EvaluateNodeCommand extends EvaluatorCommandBase {
  kind: "evalute-node";
  node: Node;
  context: EvaluationContext;
  options?: EvaluateNodeOptions;
}

export function* EvaluateNodeCommand(
  node: Node,
  context: EvaluationContext,
  options?: EvaluateNodeOptions,
): EvaluationGenerator {
  const result = yield {
    kind: "evalute-node",
    node,
    context,
    options,
  };
  return result;
}
