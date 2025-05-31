import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";
import StaticJsRealmImplementation from "../../realm/interfaces/StaticJsRealmImplementation.js";

import { StaticJsValue } from "../../types/interfaces/StaticJsValue.js";

import StaticJsEnvironment from "./StaticJsEnvironment.js";

export default interface StaticJsEnvironmentImplementation
  extends StaticJsEnvironment {
  hasBindingEvaluator(
    name: string
  ): EvaluationGenerator<ThrowCompletion | boolean>;

  createMutableBindingEvaluator(
    name: string,
    deletable: boolean
  ): EvaluationGenerator<ThrowCompletion | void>;

  createImmutableBindingEvaluator(
    name: string,
    strict: boolean
  ): EvaluationGenerator<void>;

  createFunctionBindingEvaluator(
    name: string,
    func: StaticJsValue
  ): EvaluationGenerator<void>;

  canDeclareGlobalVarEvaluator(name: string): EvaluationGenerator<boolean>;

  createGlobalVarBindingEvaluator(
    name: string,
    deletable: boolean
  ): EvaluationGenerator<void>;

  initializeBindingEvaluator(
    name: string,
    value: StaticJsValue
  ): EvaluationGenerator<void>;

  setMutableBindingEvaluator(
    name: string,
    value: StaticJsValue,
    strict: boolean
  ): EvaluationGenerator<void>;

  getBindingValueEvaluator(
    name: string,
    strict: boolean
  ): EvaluationGenerator<StaticJsValue>;

  deleteBindingEvaluator(name: string): EvaluationGenerator<void>;

  hasThisBindingEvaluator(): EvaluationGenerator<boolean>;

  hasSuperBindingEvaluator(): EvaluationGenerator<boolean>;

  withBaseObjectEvaluator(): EvaluationGenerator<StaticJsValue>;

  getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue>;

  getSuperBaseEvaluator(): EvaluationGenerator<StaticJsValue>;

  getVarScopeEvaluator(): EvaluationGenerator<StaticJsEnvironmentImplementation | null>;
}

export function isStaticJsEnvironmentImplementation(
  x: unknown
): x is StaticJsEnvironmentImplementation {
  if (typeof x !== "object" || x === null) {
    return false;
  }

  const env = x as StaticJsEnvironmentImplementation;
  return (
    typeof env.hasBindingEvaluator === "function" &&
    typeof env.createMutableBindingEvaluator === "function" &&
    typeof env.createImmutableBindingEvaluator === "function" &&
    typeof env.createFunctionBindingEvaluator === "function" &&
    typeof env.canDeclareGlobalVarEvaluator === "function" &&
    typeof env.createGlobalVarBindingEvaluator === "function" &&
    typeof env.initializeBindingEvaluator === "function" &&
    typeof env.setMutableBindingEvaluator === "function" &&
    typeof env.getBindingValueEvaluator === "function" &&
    typeof env.deleteBindingEvaluator === "function" &&
    typeof env.hasThisBindingEvaluator === "function" &&
    typeof env.hasSuperBindingEvaluator === "function" &&
    typeof env.withBaseObjectEvaluator === "function" &&
    typeof env.getThisBindingEvaluator === "function" &&
    typeof env.getSuperBaseEvaluator === "function" &&
    typeof env.getVarScopeEvaluator === "function"
  );
}

export function staticJsEnvironmentToImplementation(
  env: StaticJsEnvironment
): StaticJsEnvironmentImplementation {
  if (isStaticJsEnvironmentImplementation(env)) {
    return env;
  }

  // We can't shim this because outbound StaticJsEnvironments use promises
  // for the generators, but we can't un-promise it for inbound.
  throw new Error("Not implemented: Bring your own StaticJsEnvironment");
}
