import { Node } from "@babel/types";

import { assertStaticJsValue } from "../../runtime/index.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import EvaluationContext from "../EvaluationContext.js";

import evaluateNode from "./evaluate-node.js";

export default function* evaluteNodeAssertValue(
  node: Node,
  context: EvaluationContext,
): EvaluationGenerator {
  const result = yield* evaluateNode(node, context);
  assertStaticJsValue(
    result,
    `Expected node type ${node.type} to return a StaticJsValue.`,
  );
  return result;
}
