import { Identifier } from "@babel/types";

import { StaticJsValue } from "../../runtime/index.js";
import { NodeEvaluationContext } from "./node-evaluation-context.js";

export default function identifierNodeEvaluator(
  node: Identifier,
  context: NodeEvaluationContext,
): StaticJsValue {
  // FIXME: strict mode.
  return context.env.getBindingValue(node.name, true);
}
