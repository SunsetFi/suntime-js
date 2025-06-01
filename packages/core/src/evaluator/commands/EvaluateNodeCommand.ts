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
  const result = yield {
    kind: "evalute-node",
    node,
    context,
    options: evaluateOptions,
  };
  if (forNormalValue) {
    if (result == null) {
      throw new StaticJsEngineError(
        `Expected ${forNormalValue} to return a normal value completion, but got an empty value.`,
      );
    }
  }

  return result;
}

export function* executeEvaluateNodeCommand(
  command: EvaluateNodeCommand,
): EvaluationGenerator {
  const result = yield* evaluateNode(
    command.node,
    command.context,
    command.options,
  );
  return result;
}
