import type { Node } from "@babel/types";

import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import { getEvaluator } from "./nodes.js";
import captureThrownCompletion from "../completions/capture-thrown-completion.js";
import { Completion } from "../completions/Completion.js";

export default function* evaluateNode(node: Node): EvaluationGenerator<Completion> {
  const evaluator = getEvaluator(node);
  if (evaluator == null) {
    throw new StaticJsEngineError(`No evaluator for node type ${node.type}`);
  }

  const result = yield* captureThrownCompletion(evaluator(node));

  return result;
}
