export {
  evaluateProgram,
  evaluateExpression,
  type EvaluateExpressionOptions,
  type EvaluateProgramOptions,
} from "./evaluate.js";
export {
  compileProgram,
  compileExpression,
  type StaticJsCompilation,
  type EvaluationOptions,
  type ExpressionCompilationOptions,
  type ProgramCompilationOptions,
} from "./compilation/index.js";
export { default as StaticJsParseError } from "./StaticJsParseError.js";
