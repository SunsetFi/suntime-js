import { CatchClause } from "@babel/types";

import typedMerge from "../../internal/typed-merge.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import EvaluationContext from "../EvaluationContext.js";

function* catchClauseNodeEvaluator(
  node: CatchClause,
  context: EvaluationContext,
): EvaluationGenerator {
  throw new Error("Catch clauses must be in Try statements.");
}

export default typedMerge(catchClauseNodeEvaluator, {
  environmentSetup: () => false,
});
