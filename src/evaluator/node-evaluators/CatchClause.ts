import typedMerge from "../../internal/typed-merge.js";

import EvaluationGenerator from "../EvaluationGenerator.js";

function* catchClauseNodeEvaluator(): EvaluationGenerator {
  throw new Error("CatchClause node evaluator not implemented");
}

export default typedMerge(catchClauseNodeEvaluator, {
  environmentSetup: () => false,
});
