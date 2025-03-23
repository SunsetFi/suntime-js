import { Node } from "@babel/types";

import EvaluationContext from "./EvaluationContext.js";
import EvaluationGenerator from "./EvaluationGenerator.js";

type NodeEvaluator<TKey extends Node["type"] = Node["type"]> = {
  (
    node: Extract<Node, { type: TKey }>,
    context: EvaluationContext,
  ): EvaluationGenerator;
  environmentSetup?(
    node: Extract<Node, { type: TKey }>,
    context: EvaluationContext,
  ): boolean;
};

export default NodeEvaluator;
