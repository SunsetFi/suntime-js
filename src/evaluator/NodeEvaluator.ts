import { Node } from "@babel/types";

import EvaluationContext from "./EvaluationContext.js";
import EvaluationGenerator from "./EvaluationGenerator.js";
import EnvironmentSetupGenerator from "./EnvironmentSetupGenerator.js";

type NodeEvaluator<TKey extends Node["type"] = Node["type"]> = {
  (
    node: Extract<Node, { type: TKey }>,
    context: EvaluationContext,
  ): EvaluationGenerator;
  environmentSetup?(
    node: Extract<Node, { type: TKey }>,
    context: EvaluationContext,
  ): EnvironmentSetupGenerator;
};

export default NodeEvaluator;
