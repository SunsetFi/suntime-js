import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import ThrowCompletion from "../../../evaluator/completions/ThrowCompletion.js";
import { StaticJsValue } from "../../types/index.js";

export default interface StaticJsEnvironment {
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
  ): EvaluationGenerator<void>;

  createFunctionBinding(name: string, func: StaticJsValue): void;
  createFunctionBindingEvaluator(
    name: string,
    func: StaticJsValue,
  ): EvaluationGenerator<void>;

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
  ): EvaluationGenerator<void>;

  setMutableBinding(name: string, value: StaticJsValue, strict: boolean): void;
  setMutableBindingEvaluator(
    name: string,
    value: StaticJsValue,
    strict: boolean,
  ): EvaluationGenerator<void>;

  getBindingValue(name: string, strict: boolean): StaticJsValue;
  getBindingValueEvaluator(
    name: string,
    strict: boolean,
  ): EvaluationGenerator<StaticJsValue>;

  deleteBinding(name: string): void;
  deleteBindingEvaluator(name: string): EvaluationGenerator<void>;

  hasThisBinding(): boolean;
  hasThisBindingEvaluator(): EvaluationGenerator<boolean>;

  hasSuperBinding(): boolean;
  hasSuperBindingEvaluator(): EvaluationGenerator<boolean>;

  withBaseObject(): StaticJsValue;
  withBaseObjectEvaluator(): EvaluationGenerator<StaticJsValue>;

  getThisBinding(): StaticJsValue;
  getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue>;

  getSuperBase(): StaticJsValue;
  getSuperBaseEvaluator(): EvaluationGenerator<StaticJsValue>;

  getVarScope(): StaticJsEnvironment | null;
  getVarScopeEvaluator(): EvaluationGenerator<StaticJsEnvironment | null>;
}
