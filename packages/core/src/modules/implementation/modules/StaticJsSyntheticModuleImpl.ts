import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { call } from "#algorithms/call.js";
import { newPromiseCapability } from "#algorithms/new-promise-capability.js";
import { StaticJsModuleEnvironmentRecord } from "#environments/implementation/StaticJsModuleEnvironmentRecord.js";
import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { captureThrownCompletion } from "#evaluator/completions/capture-thrown-completion.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { X } from "#evaluator/completions/X.js";
import { EvaluationContext } from "#evaluator/EvaluationContext.js";
import { allocated } from "#memory/allocated.js";

import type { StaticJsResolvedBindingRecord } from "../StaticJsResolvedBinding.js";

import { StaticJsModuleImpl, type StaticJsModuleImplCreateParams } from "./StaticJsModuleImpl.js";

export interface StaticJsSyntheticModuleImplCreateParams extends StaticJsModuleImplCreateParams {
  exportNames: readonly string[];
  evaluationSteps: (module: StaticJsSyntheticModuleImpl) => EvaluationGenerator<void>;
}

export class StaticJsSyntheticModuleImpl extends StaticJsModuleImpl {
  private readonly _exportNames: readonly string[];
  private readonly _evaluationSteps: (
    module: StaticJsSyntheticModuleImpl,
  ) => EvaluationGenerator<void>;

  static create(params: StaticJsSyntheticModuleImplCreateParams) {
    return allocated(new StaticJsSyntheticModuleImpl(params));
  }

  protected constructor({
    exportNames,
    evaluationSteps,
    ...restParams
  }: StaticJsSyntheticModuleImplCreateParams) {
    super(restParams);
    this._exportNames = Object.freeze([...exportNames]);
    this._evaluationSteps = evaluationSteps;
  }

  *setSyntheticModuleExportEvaluator(
    exportName: string,
    exportValue: StaticJsValue,
  ): EvaluationGenerator<void> {
    if (!this._exportNames.includes(exportName)) {
      throw new StaticJsEngineError("Cannot set a synthetic module export that was not declared.");
    }
    const envRecord = this.environment;
    if (!envRecord) {
      throw new StaticJsEngineError(
        "Cannot set a synthetic module export before its environment is initialized.",
      );
    }
    yield* X(envRecord.setMutableBindingEvaluator(exportName, exportValue, true));
  }

  override loadRequestedModules() {
    return Promise.resolve();
  }

  override getExportedNames() {
    return this._exportNames;
  }

  override resolveExport(exportName: string): StaticJsResolvedBindingRecord | null | "ambiguous" {
    if (!this._exportNames.includes(exportName)) {
      return null;
    }
    return {
      module: this,
      bindingName: exportName,
    };
  }

  override *linkEvaluator() {
    const realm = this.realm;
    const envRecord = StaticJsModuleEnvironmentRecord.create({ realm, outerEnv: realm.globalEnv });
    this.environment = envRecord;
    for (const exportName of this._exportNames) {
      yield* X(envRecord.createMutableBindingEvaluator(exportName, false));
      yield* X(envRecord.initializeBindingEvaluator(exportName, realm.types.undefined));
    }
    return null;
  }

  override *evaluateEvaluator() {
    const env = this.environment;
    if (!env) {
      throw new StaticJsEngineError(
        "Cannot evaluate a synthetic module before its environment is initialized.",
      );
    }

    const moduleContext = EvaluationContext.createRootContext({
      scriptOrModule: this,
      strict: true,
      realm: this.realm,
      env,
    });

    EvaluationContext.push(moduleContext);
    let result: Completion.Abrupt | void;
    try {
      result = yield* captureThrownCompletion(this._evaluationSteps(this));
    } finally {
      EvaluationContext.pop();
    }

    // Interestingly, the spec says we never unset evaluationSteps, so we hold the reference forever.

    const { types, intrinsics } = this.realm;

    const promiseCapability = yield* X(newPromiseCapability(intrinsics.Promise));
    if (Completion.Abrupt.is(result)) {
      yield* X(call(promiseCapability.reject, types.undefined, [Completion.value(result)]));
      return promiseCapability.promise;
    }

    yield* X(call(promiseCapability.resolve, types.undefined, [types.undefined]));
    return promiseCapability.promise;
  }
}
