import typedMerge from "../../internal/typed-merge.js";

import EvaluationGenerator from "../EvaluationGenerator.js";

function* catchClauseNodeEvaluator(): EvaluationGenerator {
  throw new Error("Catch clauses must be in Try statements.");
}

export default typedMerge(catchClauseNodeEvaluator, {
  environmentSetup: function* () {
    return false;
  },
});
