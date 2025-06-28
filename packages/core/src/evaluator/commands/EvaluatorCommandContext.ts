import type EvaluationGenerator from "../EvaluationGenerator.js";

export default interface EvaluatorCommandContext {
  stack: EvaluationGenerator<unknown>[];
}
