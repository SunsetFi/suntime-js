import type { Node } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import {
  isStaticJsValue,
  type StaticJsValue,
} from "../../runtime/types/StaticJsValue.js";

import {
  isStaticJsReferenceRecord,
  type StaticJsReferenceRecord,
} from "../../runtime/references/StaticJsReferenceRecord.js";

import getValue from "../../runtime/algorithms/get-value.js";

import type { EvaluateNodeOptions } from "../node-evaluators/evaluate-node.js";
import evaluateNode from "../node-evaluators/evaluate-node.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

import type { Completion } from "../completions/Completion.js";
import isAbruptCompletion from "../completions/AbruptCompletion.js";

import type EvaluatorCommandBase from "./EvaluatorCommandBase.js";

export interface EvaluateNodeCommandOptions extends EvaluateNodeOptions {
  forNormalValue?: string;
  forReference?: string;
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
  options: EvaluateNodeCommandOptions & { forReference: string },
): EvaluationGenerator<StaticJsReferenceRecord>;
export function EvaluateNodeCommand(
  node: Node,
  context: EvaluationContext,
  options?: EvaluateNodeCommandOptions,
): EvaluationGenerator;
export function* EvaluateNodeCommand(
  node: Node,
  context: EvaluationContext,
  {
    forNormalValue,
    forReference,
    ...evaluateOptions
  }: EvaluateNodeCommandOptions = {},
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

  let result = yield* evaluateNode(node, context, evaluateOptions);
  if (forNormalValue) {
    if (result) {
      result = yield* getValue(result, context.realm);
    }

    if (!isStaticJsValue(result)) {
      throw new StaticJsEngineError(
        `Expected ${forNormalValue} to return a normal value completion.`,
      );
    }
  }

  if (forReference) {
    if (result === null || !isStaticJsReferenceRecord(result)) {
      throw new StaticJsEngineError(
        `Expected ${forReference} to return a reference completion.`,
      );
    }
  }

  return result;
}

export function* EvaluateNodeForCompletion(
  node: Node,
  context: EvaluationContext,
  options?: EvaluateNodeCommandOptions,
): EvaluationGenerator<Completion> {
  try {
    return yield* EvaluateNodeCommand(node, context, options);
  } catch (e) {
    if (isAbruptCompletion(e)) {
      return e;
    }
    throw e;
  }
}
