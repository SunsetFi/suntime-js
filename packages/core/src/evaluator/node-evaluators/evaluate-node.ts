import type { Node } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { Completion } from "../completions/Completion.js";

import { getEvaluator } from "./nodes.js";

export default function* evaluateNode(node: Node, context: EvaluationContext): EvaluationGenerator {
  const evaluator = getEvaluator(node);
  if (evaluator == null) {
    throw new StaticJsEngineError(`No evaluator for node type ${node.type}`);
  }

  const result = yield* evaluator(node, context);

  // TODO: We want to only ever return Completion eventually,
  // but for now, reinterpret it to the throw pattern.
  if (Completion.Abrupt.is(result)) {
    throw result;
  }

  return result;
}
