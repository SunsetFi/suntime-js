import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsModule } from "./StaticJsModule.js";

import type { StaticJsResolvedBinding } from "./implementation/StaticJsResolvedBinding.js";

export type StaticJsModuleStatus =
  | "uninstantiated"
  | "instantiating"
  | "instantiated"
  | "evaluating"
  | "evaluated";

export interface StaticJsModuleImplementation extends StaticJsModule {
  readonly name: string;
  readonly status: StaticJsModuleStatus;

  linkModules(): Promise<void>;

  moduleDeclarationInstantiationEvaluator(): EvaluationGenerator<void>;
  moduleEvaluationEvaluator(): EvaluationGenerator<void | Promise<void>>;

  // Note: This doesn't have to be an evaluator, except for the oddity that
  // we still want to throw Completion.Throw.  Should we just throw the RuntimeError?
  resolveExportEvaluator(
    exportName: string,
    resolveSet?: Set<string>,
  ): EvaluationGenerator<StaticJsResolvedBinding>;

  // Note: This doesn't have to be an evaluator, except for the oddity that
  // we still want to throw Completion.Throw.  Should we just throw the RuntimeError?
  getExportedNamesEvaluator(exportStarSet?: Set<string>): EvaluationGenerator<string[]>;

  // TODO: Just expose the StaticJsEnvironment and
  // do this manually where needed.
  getOwnBindingValueEvaluator(bindingName: string): EvaluationGenerator<StaticJsValue | null>;

  getModuleNamespaceEvaluator(): EvaluationGenerator<StaticJsObjectLike>;
}

export function isStaticJsModuleImplementation(x: unknown): x is StaticJsModuleImplementation {
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
    getExportedNames() {
      return module.getExportedNames();
    },
    getExportAsync(exportName) {
      return module.getExportAsync(exportName);
    },
    getExportJsSync(exportName) {
      return module.getExportJsSync(exportName);
    },
    getModuleNamespaceJsSync() {
      return module.getModuleNamespaceJsSync();
    },
    linkModules() {
      return Promise.resolve<void>(undefined);
    },
    *moduleDeclarationInstantiationEvaluator() {},
    *moduleEvaluationEvaluator() {},
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
      const value = module.getExportJsSync(name);
      if (value == null) {
        return null;
      }
      return realm.types.toStaticJsValue(value);
    },
    *getModuleNamespaceEvaluator() {
      const ns = module.getModuleNamespaceJsSync();
      return realm.types.toStaticJsValue(ns);
    },
  };
}
