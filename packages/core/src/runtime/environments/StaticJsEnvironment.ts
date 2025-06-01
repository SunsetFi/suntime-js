import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";

import EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import { StaticJsValue } from "../types/StaticJsValue.js";

export interface StaticJsEnvironment {
  hasBinding(name: string): boolean;
  hasBindingEvaluator(
    name: string,
  ): EvaluationGenerator<ThrowCompletion | boolean>;

  createMutableBinding(name: string, deletable: boolean): void;
  createMutableBindingEvaluator(
    name: string,
    deletable: boolean,
  ): EvaluationGenerator<ThrowCompletion | void>;

  createImmutableBinding(name: string, strict: boolean): void;
  createImmutableBindingEvaluator(
    name: string,
    strict: boolean,
  ): EvaluationGenerator<ThrowCompletion | void>;

  createFunctionBinding(name: string, func: StaticJsValue): void;
  createFunctionBindingEvaluator(
    name: string,
    func: StaticJsValue,
  ): EvaluationGenerator<ThrowCompletion | void>;

  canDeclareGlobalVar(name: string): boolean;
  canDeclareGlobalVarEvaluator(name: string): EvaluationGenerator<boolean>;

  createGlobalVarBinding(name: string, deletable: boolean): void;
  createGlobalVarBindingEvaluator(
    name: string,
    deletable: boolean,
  ): EvaluationGenerator<void>;

  initializeBinding(name: string, value: StaticJsValue): void;
  initializeBindingEvaluator(
    name: string,
    value: StaticJsValue,
  ): EvaluationGenerator<ThrowCompletion | void>;

  setMutableBinding(name: string, value: StaticJsValue, strict: boolean): void;
  setMutableBindingEvaluator(
    name: string,
    value: StaticJsValue,
    strict: boolean,
  ): EvaluationGenerator<ThrowCompletion | void>;

  getBindingValue(name: string, strict: boolean): StaticJsValue;
  getBindingValueEvaluator(
    name: string,
    strict: boolean,
  ): EvaluationGenerator<StaticJsValue | ThrowCompletion>;

  deleteBinding(name: string): void;
  deleteBindingEvaluator(
    name: string,
  ): EvaluationGenerator<ThrowCompletion | void>;

  hasThisBinding(): boolean;
  // FIXME: DOesnt change or evaluate, doesn't need to be an Evaluator.
  hasThisBindingEvaluator(): EvaluationGenerator<boolean>;

  hasSuperBinding(): boolean;
  // FIXME: DOesnt change or evaluate, doesn't need to be an Evaluator.
  hasSuperBindingEvaluator(): EvaluationGenerator<boolean>;

  withBaseObject(): StaticJsValue;
  // FIXME: DOesnt change or evaluate, doesn't need to be an Evaluator.
  withBaseObjectEvaluator(): EvaluationGenerator<StaticJsValue>;

  getThisBinding(): StaticJsValue;
  // FIXME: DOesnt change or evaluate, doesn't need to be an Evaluator.
  getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue>;

  getSuperBase(): StaticJsValue;
  // FIXME: DOesnt change or evaluate, doesn't need to be an Evaluator.
  getSuperBaseEvaluator(): EvaluationGenerator<StaticJsValue>;

  getVarScope(): StaticJsEnvironment | null;
  // FIXME: DOesnt change or evaluate, doesn't need to be an Evaluator.
  getVarScopeEvaluator(): EvaluationGenerator<StaticJsEnvironment | null>;
}
