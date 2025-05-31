import typedMerge from "../../internal/typed-merge.js";

import EvaluationGenerator from "../EvaluationGenerator.js";
import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

function* catchClauseNodeEvaluator(): EvaluationGenerator {
  throw new StaticJsEngineError("Catch clauses must be in Try statements.");
}

export default typedMerge(catchClauseNodeEvaluator, {
  environmentSetup: false,
});
