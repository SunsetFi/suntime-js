import { StaticJsRealm } from "../../runtime/realm/interfaces/StaticJsRealm.js";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ProgramCompilationOptions {}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ExpressionCompilationOptions {}

export interface EvaluationOptions {
  realm?: StaticJsRealm;
}
