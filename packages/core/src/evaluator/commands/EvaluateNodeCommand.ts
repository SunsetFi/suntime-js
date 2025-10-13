import type { Node } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type { StaticJsValue } from "../../runtime/types/StaticJsValue.js";

import type { EvaluateNodeOptions } from "../node-evaluators/evaluate-node.js";
import evaluateNode from "../node-evaluators/evaluate-node.js";

import type EvaluationContext from "../EvaluationContext.js";
import type EvaluationGenerator from "../EvaluationGenerator.js";

import type EvaluatorCommandBase from "./EvaluatorCommandBase.js";

export interface EvaluateNodeCommandOptions extends EvaluateNodeOptions {
  forNormalValue?: string;
}

export interface EvaluateNodeCommand extends EvaluatorCommandBase {
  kind: "evalute-node";
  node: Node;
  context: EvaluationContext;
  options?: EvaluateNodeOptions;
}

export function EvaluateNodeCommand(
  node: Node,
  context: EvaluationContext,
  options: EvaluateNodeCommandOptions & { forNormalValue: string },
): EvaluationGenerator<StaticJsValue>;
export function EvaluateNodeCommand(
  node: Node,
  context: EvaluationContext,
  options?: EvaluateNodeCommandOptions,
): EvaluationGenerator;
export function* EvaluateNodeCommand(
  node: Node,
  context: EvaluationContext,
  { forNormalValue, ...evaluateOptions }: EvaluateNodeCommandOptions = {},
): EvaluationGenerator<unknown> {
  // At one point, our commands were evaluated by a handler at the root of the evaluation chain,
  // and our result would come out of this yield statement.
  // However, that made it hard to implement async functions, as we would need to teach that system
  // how to handle an async yield.
  // Instead, this acts more as an advisory and "ask permission to continue" step.
  yield {
    kind: "evalute-node",
    node,
    context,
    options: evaluateOptions,
  };

  const result = yield* evaluateNode(node, context, evaluateOptions);
  if (forNormalValue) {
    if (result == null) {
      throw new StaticJsEngineError(
        `Expected ${forNormalValue} to return a normal value completion, but got an empty value.`,
      );
    }
  }

  return result;
}
