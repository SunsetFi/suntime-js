import type { Node } from "@babel/types";

import type { EvaluationGenerator } from "./EvaluationGenerator.js";

export type NodeEvaluator<TNode extends Node = Node> = {
  (node: TNode): EvaluationGenerator;
};
