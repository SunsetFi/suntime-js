export {
  evaluateProgram,
  evaluateModule,
  evaluateExpression,
  type EvaluateExpressionOptions,
  type EvaluateProgramOptions,
} from "./evaluate.js";
export {
  compileProgram,
  compileModule,
  compileExpression,
  type StaticJsCompilation,
  type EvaluationOptions,
  type ExpressionCompilationOptions,
  type ProgramCompilationOptions,
} from "./compilation/index.js";
export { default as StaticJsParseError } from "./StaticJsParseError.js";
