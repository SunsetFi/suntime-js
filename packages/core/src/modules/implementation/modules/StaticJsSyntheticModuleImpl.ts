import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { call } from "#algorithms/call.js";
import { newPromiseCapability } from "#algorithms/new-promise-capability.js";
import { promiseResolve } from "#algorithms/promise-resolve.js";
import { StaticJsModuleEnvironmentRecord } from "#environments/implementation/StaticJsModuleEnvironmentRecord.js";
import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { captureThrownCompletion } from "#evaluator/completions/capture-thrown-completion.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { X } from "#evaluator/completions/X.js";
import { EvaluationContext } from "#evaluator/EvaluationContext.js";
import { invokeEvaluator, type StaticJsMemberEvaluator } from "#evaluator/StaticJsEvaluator.js";
import { allocated } from "#memory/allocated.js";

import type { StaticJsResolvedBindingRecord } from "../StaticJsResolvedBinding.js";

import { StaticJsModuleImpl, type StaticJsModuleImplCreateParams } from "./StaticJsModuleImpl.js";

export interface StaticJsSyntheticModuleImplCreateParams extends StaticJsModuleImplCreateParams {
  exportNames: readonly string[];
  evaluationSteps: StaticJsMemberEvaluator<StaticJsSyntheticModuleImpl, void>;
}

export class StaticJsSyntheticModuleImpl extends StaticJsModuleImpl {
  private readonly _exportNames: readonly string[];
  private readonly _evaluationSteps: StaticJsMemberEvaluator<StaticJsSyntheticModuleImpl, void>;

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

  *setSyntheticModuleExport(
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

  override *loadRequestedModules() {
    return yield* X(promiseResolve(this.realm.intrinsics.Promise, this.realm.types.undefined));
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

  override *link() {
    const realm = this.realm;
    const envRecord = StaticJsModuleEnvironmentRecord.create({ realm });
    this.environment = envRecord;
    for (const exportName of this._exportNames) {
      yield* X(envRecord.createMutableBindingEvaluator(exportName, false));
      yield* X(envRecord.initializeBindingEvaluator(exportName, realm.types.undefined));
    }
    return null;
  }

  override *evaluate() {
    const moduleContext = EvaluationContext.createRootContext({
      scriptOrModule: this,
      strict: true,
      realm: this.realm,
      env: this.environment!,
    });

    EvaluationContext.push(moduleContext);
    let result: Completion.Abrupt | void;
    try {
      result = yield* captureThrownCompletion(invokeEvaluator(this._evaluationSteps, this));
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
