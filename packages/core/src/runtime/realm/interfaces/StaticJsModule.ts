import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import { StaticJsValue } from "../../types/index.js";

export type StaticJsModuleStatus =
  | "uninstantiated"
  | "instantiated"
  | "evaluating"
  | "evaluated";
export default interface StaticJsModule {
  readonly name: string;
  readonly status: StaticJsModuleStatus;

  moduleDeclarationInstantiation(): EvaluationGenerator;
  moduleEvaluation(): EvaluationGenerator;

  hasExport(name: string): boolean;
  resolveExport(name: string): StaticJsValue | undefined;
  getExportedNames(): readonly string[];
}

export function isStaticJsModule(x: unknown): x is StaticJsModule {
  if (typeof x !== "object" || x === null) {
    return false;
  }

  const module = x as StaticJsModule;
  return (
    typeof module.name === "string" &&
    typeof module.hasExport === "function" &&
    typeof module.resolveExport === "function" &&
    typeof module.getExportedNames === "function"
  );
}
