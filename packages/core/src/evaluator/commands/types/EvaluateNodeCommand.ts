import { Node } from "@babel/types";

import EvaluationContext from "../../EvaluationContext.js";
import EvaluationGenerator from "../../EvaluationGenerator.js";
import { EvaluateNodeOptions } from "../../node-evaluators/index.js";

import EvaluatorCommandBase from "./EvaluatorCommandBase.js";
import StaticJsRuntimeError from "../../StaticJsRuntimeError.js";
import { ThrowCompletion } from "../../internal.js";
import { StaticJsValue } from "../../../runtime/index.js";
import StaticJsEngineError from "../../StaticJsEngineError.js";

export interface EvaluateNodeCommandOptions extends EvaluateNodeOptions {
  rethrow?: boolean;
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
  {
    rethrow,
    forNormalValue,
    ...evaluateOptions
  }: EvaluateNodeCommandOptions = {},
): EvaluationGenerator<unknown> {
  try {
    const result = yield {
      kind: "evalute-node",
      node,
      context,
      options: evaluateOptions,
    };
    if (rethrow && result.type === "throw") {
      throw new StaticJsRuntimeError(result.value);
    }

    if (forNormalValue) {
      if (result.type !== "normal") {
        throw new StaticJsEngineError(
          `Expected ${forNormalValue} to return a normal value completion, but got ${result.type}`,
        );
      }

      if (!result.value) {
        throw new StaticJsEngineError(
          `Expected ${forNormalValue} to return a normal value completion, but got an empty value`,
        );
      }

      return result.value;
    }

    return result;
  } catch (e: unknown) {
    if (rethrow || e instanceof StaticJsRuntimeError === false) {
      throw e;
    }

    return ThrowCompletion(e.thrown);
  }
}
