import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";
import EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";
import { NormalCompletion } from "../../evaluator/completions/NormalCompletion.js";
import { StaticJsObjectLike } from "../types/StaticJsObject.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

import { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { StaticJsModule } from "./StaticJsModule.js";

import { StaticJsResolvedBinding } from "./StaticJsResolvedBinding.js";

export type StaticJsModuleStatus =
  | "uninstantiated"
  | "instantiated"
  | "evaluating"
  | "evaluated";

export interface StaticJsModuleImplementation extends StaticJsModule {
  readonly name: string;
  readonly status: StaticJsModuleStatus;

  linkModules(): Promise<void>;

  moduleDeclarationInstantiationEvaluator(): EvaluationGenerator;
  moduleEvaluationEvaluator(): EvaluationGenerator;

  // Note: This doesn't have to be an evaluator, except for the oddity that
  // we still want to return ThrowCompletions.  Should we just throw the RuntimeError?
  resolveExportEvaluator(
    exportName: string,
    resolveSet?: Set<string>,
  ): EvaluationGenerator<StaticJsResolvedBinding | ThrowCompletion>;

  // Note: This doesn't have to be an evaluator, except for the oddity that
  // we still want to return ThrowCompletions.  Should we just throw the RuntimeError?
  getExportedNamesEvaluator(
    exportStarSet?: Set<string>,
  ): EvaluationGenerator<string[] | ThrowCompletion>;

  // TODO: Just expose the StaticJsEnvironment and
  // do this manually where needed.
  getOwnBindingValueEvaluator(
    bindingName: string,
  ): EvaluationGenerator<StaticJsValue | ThrowCompletion | null>;

  getModuleNamespaceEvaluator(): EvaluationGenerator<
    StaticJsObjectLike | ThrowCompletion
  >;
}

export function isStaticJsModuleImplementation(
  x: unknown,
): x is StaticJsModuleImplementation {
  if (typeof x !== "object" || x === null) {
    return false;
  }

  const module = x as StaticJsModuleImplementation;
  return (
    typeof module.name === "string" &&
    typeof module.status === "string" &&
    typeof module.moduleDeclarationInstantiationEvaluator === "function" &&
    typeof module.moduleEvaluationEvaluator === "function" &&
    typeof module.resolveExportEvaluator === "function" &&
    typeof module.getExportedNamesEvaluator === "function" &&
    typeof module.getOwnBindingValueEvaluator === "function" &&
    typeof module.getModuleNamespaceEvaluator === "function"
  );
}

export function staticJsModuleToImplementation(
  realm: StaticJsRealm,
  module: StaticJsModule,
): StaticJsModuleImplementation {
  if (isStaticJsModuleImplementation(module)) {
    return module;
  }
  return {
    name: module.name,
    status: "evaluated",
    getExport(exportName) {
      return module.getExport(exportName);
    },
    getExportedNames() {
      return module.getExportedNames();
    },
    getModuleNamespace() {
      return module.getModuleNamespace();
    },
    linkModules() {
      return Promise.resolve<void>(undefined);
    },
    *moduleDeclarationInstantiationEvaluator() {
      return NormalCompletion();
    },
    *moduleEvaluationEvaluator() {
      return NormalCompletion();
    },
    *resolveExportEvaluator(name) {
      if (!module.getExportedNames().includes(name)) {
        return null;
      }
      return {
        module: this,
        bindingName: name,
      };
    },
    *getExportedNamesEvaluator() {
      return module.getExportedNames();
    },
    *getOwnBindingValueEvaluator(name) {
      const value = module.getExport(name);
      if (value == null) {
        return null;
      }
      return realm.types.toStaticJsValue(value);
    },
    *getModuleNamespaceEvaluator() {
      const ns = module.getModuleNamespace();
      return realm.types.toStaticJsValue(ns);
    },
  };
}
