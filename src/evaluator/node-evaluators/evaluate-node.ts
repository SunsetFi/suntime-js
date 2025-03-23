import { Node } from "@babel/types";

import { getEvaluator } from "./nodes.js";

import EvaluationContext from "../EvaluationContext.js";
import EvaluationGenerator from "../EvaluationGenerator.js";

export default function* evaluateNode(
  node: Node,
  context: EvaluationContext,
): EvaluationGenerator {
  const evaluator = getEvaluator(node);
  if (evaluator == null) {
    throw new Error(`No evaluator for node type ${node.type}`);
  }

  const result = yield* evaluator(node, context);

  return result;
}
