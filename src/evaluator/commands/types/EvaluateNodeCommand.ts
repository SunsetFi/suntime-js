import { Node } from "@babel/types";

import { StaticJsValue } from "../../../runtime/index.js";

import EvaluationContext from "../../EvaluationContext.js";
import EvaluationGenerator from "../../EvaluationGenerator.js";
import { EvaluateNodeOptions } from "../../node-evaluators/index.js";

import EvaluatorCommandBase from "./EvaluatorCommandBase.js";

export interface EvaluateNodeCommand extends EvaluatorCommandBase {
  kind: "evalute-node";
  node: Node;
  context: EvaluationContext;
  options?: EvaluateNodeOptions;
}

export function* EvaluateNodeCommand(
  node: Node,
  context: EvaluationContext,
  options?: EvaluateNodeOptions,
): EvaluationGenerator {
  const result = yield {
    kind: "evalute-node",
    node,
    context,
    options,
  };
  return result;
}

export function* EvaluateNodeNormalValueCommand(
  node: Node,
  context: EvaluationContext,
): EvaluationGenerator<StaticJsValue> {
  const result = yield* EvaluateNodeCommand(node, context);
  if (result.type !== "normal") {
    throw new Error(`Expected node type ${node.type} to return a value.`);
  }

  if (!result.value) {
    throw new Error(`Expected node type ${node.type} to return a value.`);
  }

  return result.value;
}
