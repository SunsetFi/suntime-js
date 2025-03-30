import { EvaluationGenerator } from "../../../evaluator/internal.js";
import { StaticJsValue } from "../../types/interfaces/StaticJsValue.js";
import StaticJsEnvironment from "../interfaces/StaticJsEnvironment.js";
import StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";

export const StaticJsEnvironmentGetBinding: unique symbol = Symbol(
  "static-js::StaticJsEnvironmentBindingProvider",
);
export default interface StaticJsEnvironmentBindingProvider {
  [StaticJsEnvironmentGetBinding](
    name: string,
  ): StaticJsEnvironmentBinding | undefined;
}
export function isStaticJsEnvironmentBindingProvider(
  value: unknown,
): value is StaticJsEnvironmentBindingProvider {
  return (
    typeof value === "object" &&
    value !== null &&
    StaticJsEnvironmentGetBinding in value
  );
}
export function environmentToBindingProvider(
  env: StaticJsEnvironment,
): StaticJsEnvironment & StaticJsEnvironmentBindingProvider {
  if (isStaticJsEnvironmentBindingProvider(env)) {
    return env;
  }

  return {
    hasBinding(name: string): boolean {
      return env.hasBinding(name);
    },
    hasBindingEvaluator(name: string): EvaluationGenerator<boolean> {
      return env.hasBindingEvaluator(name);
    },

    createMutableBinding(name: string, deletable: boolean): void {
      env.createMutableBinding(name, deletable);
    },
    createMutableBindingEvaluator(
      name: string,
      deletable: boolean,
    ): EvaluationGenerator<void> {
      return env.createMutableBindingEvaluator(name, deletable);
    },

    createImmutableBinding(name: string, strict: boolean): void {
      env.createImmutableBinding(name, strict);
    },
    createImmutableBindingEvaluator(
      name: string,
      strict: boolean,
    ): EvaluationGenerator<void> {
      return env.createImmutableBindingEvaluator(name, strict);
    },

    canDeclareGlobalVar(name: string): boolean {
      return env.canDeclareGlobalVar(name);
    },
    canDeclareGlobalVarEvaluator(name: string): EvaluationGenerator<boolean> {
      return env.canDeclareGlobalVarEvaluator(name);
    },

    createGlobalVarBinding(name: string, deletable: boolean): void {
      env.createGlobalVarBinding(name, deletable);
    },
    createGlobalVarBindingEvaluator(
      name: string,
      deletable: boolean,
    ): EvaluationGenerator<void> {
      return env.createGlobalVarBindingEvaluator(name, deletable);
    },

    initializeBinding(name: string, value: StaticJsValue): void {
      env.initializeBinding(name, value);
    },
    initializeBindingEvaluator(
      name: string,
      value: StaticJsValue,
    ): EvaluationGenerator<void> {
      return env.initializeBindingEvaluator(name, value);
    },

    setMutableBinding(
      name: string,
      value: StaticJsValue,
      strict: boolean,
    ): void {
      env.setMutableBinding(name, value, strict);
    },
    setMutableBindingEvaluator(
      name: string,
      value: StaticJsValue,
      strict: boolean,
    ): EvaluationGenerator<void> {
      return env.setMutableBindingEvaluator(name, value, strict);
    },

    getBindingValue(name: string, strict: boolean): StaticJsValue {
      return env.getBindingValue(name, strict);
    },
    getBindingValueEvaluator(
      name: string,
      strict: boolean,
    ): EvaluationGenerator<StaticJsValue> {
      return env.getBindingValueEvaluator(name, strict);
    },

    deleteBinding(name: string): void {
      env.deleteBinding(name);
    },
    deleteBindingEvaluator(name: string): EvaluationGenerator<void> {
      return env.deleteBindingEvaluator(name);
    },

    hasThisBinding(): boolean {
      return env.hasThisBinding();
    },
    hasThisBindingEvaluator(): EvaluationGenerator<boolean> {
      return env.hasThisBindingEvaluator();
    },

    hasSuperBinding(): boolean {
      return env.hasSuperBinding();
    },
    hasSuperBindingEvaluator(): EvaluationGenerator<boolean> {
      return env.hasSuperBindingEvaluator();
    },

    withBaseObject(): StaticJsValue {
      return env.withBaseObject();
    },
    withBaseObjectEvaluator(): EvaluationGenerator<StaticJsValue> {
      return env.withBaseObjectEvaluator();
    },

    getThisBinding(): StaticJsValue {
      return env.getThisBinding();
    },
    getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue> {
      return env.getThisBindingEvaluator();
    },

    getSuperBase(): StaticJsValue {
      return env.getSuperBase();
    },
    getSuperBaseEvaluator(): EvaluationGenerator<StaticJsValue> {
      return env.getSuperBaseEvaluator();
    },

    getVarScope(): StaticJsEnvironment | null {
      return env.getVarScope();
    },
    getVarScopeEvaluator(): EvaluationGenerator<StaticJsEnvironment | null> {
      return env.getVarScopeEvaluator();
    },

    [StaticJsEnvironmentGetBinding](
      name: string,
    ): StaticJsEnvironmentBinding | undefined {
      if (!env.hasBinding(name)) {
        return undefined;
      }

      return {
        name,
        // TODO: We don't know these.
        isInitialized: false,
        isMutable: false,
        isDeletable: false,
        *initialize(value) {
          env.initializeBinding(name, value);
        },
        *get() {
          return env.getBindingValue(name, true);
        },
        *set(value) {
          env.setMutableBinding(name, value, true);
        },
        *delete() {
          env.deleteBinding(name);
        },
      };
    },
  };
}
