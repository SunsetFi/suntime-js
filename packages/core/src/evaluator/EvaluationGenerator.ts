import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";
import type { EvaluatorCommand } from "./commands/EvaluatorCommand.js";

type EvaluationGenerator<TReturn = StaticJsValue | null> = Generator<
  EvaluatorCommand,
  TReturn,
  StaticJsValue | null
>;
export default EvaluationGenerator;
