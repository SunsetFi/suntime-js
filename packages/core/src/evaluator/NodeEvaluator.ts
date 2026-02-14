import type { Node } from "@babel/types";

import type EvaluationContext from "./EvaluationContext.js";
import type { EvaluationGenerator } from "./EvaluationGenerator.js";

export type NodeEnvironmentSetupCallback<TNode extends Node> = (
  node: TNode,
  context: EvaluationContext,
) => EvaluationGenerator<boolean>;

export type NodeEvaluator<TNode extends Node = Node> = {
  (node: TNode, context: EvaluationContext): EvaluationGenerator;
  environmentSetup?: NodeEnvironmentSetupCallback<TNode> | boolean;
};
