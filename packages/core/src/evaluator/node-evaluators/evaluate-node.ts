import type { Node } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import { getEvaluator } from "./nodes.js";

export interface EvaluateNodeOptions {
  label?: string;
}
export default function* evaluateNode(
  node: Node,
  context: EvaluationContext,
  { label }: EvaluateNodeOptions = {},
): EvaluationGenerator {
  const evaluator = getEvaluator(node);
  if (evaluator == null) {
    throw new StaticJsEngineError(`No evaluator for node type ${node.type}`);
  }

  // Always reset the label when drilling into a node,
  // unless we have explicitly been given one.
  context = context.createLabelContext(label ?? null);
  const result = yield* evaluator(node, context);

  return result;
}
