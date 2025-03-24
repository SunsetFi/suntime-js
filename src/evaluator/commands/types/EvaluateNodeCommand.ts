import { Node } from "@babel/types";

import { assertStaticJsValue, StaticJsValue } from "../../../runtime/index.js";

import EvaluationContext from "../../EvaluationContext.js";
import EvaluationResult from "../../EvaluationResult.js";
import EvaluationGenerator from "../../EvaluationGenerator.js";

import EvaluatorCommandBase from "./EvaluatorCommandBase.js";

export interface EvaluateNodeCommand
  extends EvaluatorCommandBase<EvaluationResult> {
  kind: "evalute-node";
  node: Node;
  context: EvaluationContext;
}

export function* EvaluateNodeCommand(
  node: Node,
  context: EvaluationContext,
): EvaluationGenerator {
  const result = yield {
    kind: "evalute-node",
    node,
    context,
  };
  return result;
}

export function* EvaluateNodeValueCommand(
  node: Node,
  context: EvaluationContext,
): EvaluationGenerator<StaticJsValue> {
  const result = yield* EvaluateNodeCommand(node, context);
  assertStaticJsValue(
    result,
    `Expected node type ${node.type} to return a StaticJsValue.`,
  );
  return result;
}
