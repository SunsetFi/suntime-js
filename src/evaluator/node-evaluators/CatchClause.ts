import { CatchClause } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import { StaticJsValue } from "../../runtime/index.js";

import { NodeEvaluationContext } from "./node-evaluation-context.js";

function catchClauseNodeEvaluator(
  node: CatchClause,
  context: NodeEvaluationContext,
): StaticJsValue {
  throw new Error("CatchClause node evaluator not implemented");
}

export default typedMerge(catchClauseNodeEvaluator, {
  environmentSetup: () => false,
});
