import { Node } from "@babel/types";

import EvaluationContext from "./EvaluationContext.js";
import EvaluationGenerator from "./EvaluationGenerator.js";
import ThrowCompletion from "./completions/ThrowCompletion.js";

type NodeEnvironmentSetupCallback<TNode extends Node> = (
  node: TNode,
  context: EvaluationContext,
) => EvaluationGenerator<ThrowCompletion | boolean>;
type NodeEvaluator<TKey extends Node["type"] = Node["type"]> = {
  (
    node: Extract<Node, { type: TKey }>,
    context: EvaluationContext,
  ): EvaluationGenerator;
  environmentSetup?:
    | NodeEnvironmentSetupCallback<Extract<Node, { type: TKey }>>
    | boolean;
};

export default NodeEvaluator;
