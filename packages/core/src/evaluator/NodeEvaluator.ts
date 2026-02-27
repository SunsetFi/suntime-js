import type { Node } from "@babel/types";

import type EvaluationContext from "./EvaluationContext.js";
import type { EvaluationGenerator } from "./EvaluationGenerator.js";

export type NodeEvaluator<TNode extends Node = Node> = {
  (node: TNode, context: EvaluationContext): EvaluationGenerator;
};
