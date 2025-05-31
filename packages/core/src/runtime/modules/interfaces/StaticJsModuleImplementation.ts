import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";
import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import { NormalCompletion } from "../../../evaluator/completions/NormalCompletion.js";
import { StaticJsObjectLike } from "../../types/interfaces/StaticJsObject.js";
import { StaticJsValue } from "../../types/interfaces/StaticJsValue.js";

import StaticJsRealmImplementation from "../../realm/interfaces/StaticJsRealmImplementation.js";

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

  resolveExport(
    exportName: string,
    resolveSet?: Set<string>
  ): StaticJsResolvedBinding;

  getExportedNames(exportStarSet?: Set<string>): string[];

  // FIXME: Just expose the environment.
  getOwnBindingValueEvaluator(
    bindingName: string
  ): EvaluationGenerator<StaticJsValue | ThrowCompletion | null>;

  getModuleNamespaceEvaluator(): EvaluationGenerator<
    StaticJsObjectLike | ThrowCompletion
  >;
}

export function isStaticJsModuleImplementation(
  x: unknown
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
    typeof module.resolveExport === "function" &&
    typeof module.getExportedNames === "function" &&
    typeof module.getOwnBindingValueEvaluator === "function" &&
    typeof module.getModuleNamespaceEvaluator === "function"
  );
}

export function staticJsModuleToImplementation(
  realm: StaticJsRealmImplementation,
  module: StaticJsModule
): StaticJsModuleImplementation {
  if (isStaticJsModuleImplementation(module)) {
    return module;
  }
  return {
    ...module,
    status: "evaluated",
    *getModuleNamespaceEvaluator() {
      // Can't use getModuleNamespace since that is async.
      const exportedNames = module.getExportedNames();
      const namespace: Record<string, StaticJsValue> = {};
      for (const name of exportedNames) {
        const value = module.getExport(name);
        if (value != null) {
          namespace[name] = realm.types.toStaticJsValue(value);
        }
      }
      return realm.types.toStaticJsValue(namespace);
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
    resolveExport(name) {
      if (!module.getExportedNames().includes(name)) {
        return null;
      }
      return {
        module: this,
        bindingName: name,
      };
    },
    *getOwnBindingValueEvaluator(name) {
      const value = module.getExport(name);
      if (value == null) {
        return null;
      }
      return realm.types.toStaticJsValue(value);
    },
  };
}
