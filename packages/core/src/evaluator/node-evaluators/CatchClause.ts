import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";

function* catchClauseNodeEvaluator(): EvaluationGenerator {
  throw new StaticJsEngineError("Catch clauses must be in Try statements.");
}

export default catchClauseNodeEvaluator;
