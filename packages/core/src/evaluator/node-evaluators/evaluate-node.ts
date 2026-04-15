import type { Node } from "@babel/types";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import { captureThrownCompletion } from "../completions/capture-thrown-completion.js";
import { Completion } from "../completions/Completion.js";
import { getEvaluator } from "./nodes.js";

export default function* evaluateNode(node: Node): EvaluationGenerator<Completion> {
  const evaluator = getEvaluator(node);
  if (evaluator == null) {
    throw new StaticJsEngineError(`No evaluator for node type ${node.type}`);
  }

  const result = yield* captureThrownCompletion(evaluator(node));

  return result;
}
