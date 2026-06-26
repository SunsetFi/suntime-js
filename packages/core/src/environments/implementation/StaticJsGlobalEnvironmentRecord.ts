import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { Completion } from "#evaluator/completions/Completion.js";

import type { StaticJsDeclarativeEnvironmentRecord } from "./StaticJsDeclarativeEnvironmentRecord.js";
import type { StaticJsObjectEnvironmentRecord } from "./StaticJsObjectEnvironmentRecord.js";

import { StaticJsEnvironmentRecordBase } from "./StaticJsEnvironmentRecordBase.js";

export class StaticJsGlobalEnvironmentRecord extends StaticJsEnvironmentRecordBase {
  constructor(
    private readonly _globalThis: StaticJsValue,
    private readonly _declarativeRecord: StaticJsDeclarativeEnvironmentRecord,
    private readonly _objectRecord: StaticJsObjectEnvironmentRecord,
    private readonly _realm: StaticJsRealm,
  ) {
    super(null);
  }

  get declarativeRecord(): StaticJsDeclarativeEnvironmentRecord {
    return this._declarativeRecord;
  }

  get objectRecord(): StaticJsObjectEnvironmentRecord {
    return this._objectRecord;
  }

  *inspectBindingsEvaluator(): EvaluationGenerator<Record<string, StaticJsValue | null>> {
    const inspectDeclarative = yield* this._declarativeRecord.inspectBindingsEvaluator();
    const inspectObject = yield* this._objectRecord.inspectBindingsEvaluator();

    // Declarative shadows global
    return {
      ...inspectObject,
      ...inspectDeclarative,
    };
  }

  *hasBindingEvaluator(name: string): EvaluationGenerator<boolean> {
    const hasDeclarativeBinding = yield* this._declarativeRecord.hasBindingEvaluator(name);
    if (hasDeclarativeBinding) {
      return true;
    }

    return yield* this._objectRecord.hasBindingEvaluator(name);
  }

  *isInitializedEvaluator(name: string): EvaluationGenerator<boolean> {
    const hasDeclarativeBinding = yield* this._declarativeRecord.hasBindingEvaluator(name);
    if (hasDeclarativeBinding) {
      return yield* this._declarativeRecord.isInitializedEvaluator(name);
    }

    return yield* this._objectRecord.isInitializedEvaluator(name);
  }

  *initializeBindingEvaluator(name: string, value: StaticJsValue): EvaluationGenerator<void> {
    const hasDeclarativeBinding = yield* this._declarativeRecord.hasBindingEvaluator(name);
    if (hasDeclarativeBinding) {
      return yield* this._declarativeRecord.initializeBindingEvaluator(name, value);
    }

    yield* this._objectRecord.initializeBindingEvaluator(name, value);
  }

  *setMutableBindingEvaluator(
    name: string,
    value: StaticJsValue,
    strict: boolean,
  ): EvaluationGenerator<void> {
    // FIXME: Theres a whole reference thing we aren't doing which should be taking care of this (ResolveBinding, GetValue, PutValue).

    const hasDeclarativeBinding = yield* this._declarativeRecord.hasBindingEvaluator(name);
    if (hasDeclarativeBinding) {
      return yield* this._declarativeRecord.setMutableBindingEvaluator(name, value, strict);
    }

    yield* this._objectRecord.setMutableBindingEvaluator(name, value, strict);
  }

  *createMutableBindingEvaluator(name: string, deletable: boolean): EvaluationGenerator<void> {
    yield* this._ensureDeclarativeBindingNotDeclared(name);

    return yield* this._declarativeRecord.createMutableBindingEvaluator(name, deletable);
  }

  *createImmutableBindingEvaluator(name: string, strict: boolean): EvaluationGenerator<void> {
    yield* this._ensureDeclarativeBindingNotDeclared(name);

    yield* this._declarativeRecord.createImmutableBindingEvaluator(name, strict);
  }

  *getBindingValueEvaluator(name: string, strict: boolean): EvaluationGenerator<StaticJsValue> {
    const hasDeclarativeBinding = yield* this._declarativeRecord.hasBindingEvaluator(name);
    if (hasDeclarativeBinding) {
      return yield* this._declarativeRecord.getBindingValueEvaluator(name, strict);
    }

    return yield* this._objectRecord.getBindingValueEvaluator(name, strict);
  }

  *deleteBindingEvaluator(name: string): EvaluationGenerator<boolean> {
    const hasDeclarativeBinding = yield* this._declarativeRecord.hasBindingEvaluator(name);
    if (hasDeclarativeBinding) {
      return yield* this._declarativeRecord.deleteBindingEvaluator(name);
    }

    return yield* this._objectRecord.deleteBindingEvaluator(name);
  }

  *hasThisBindingEvaluator(): EvaluationGenerator<boolean> {
    return true;
  }

  *getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this._globalThis;
  }

  *hasSuperBindingEvaluator(): EvaluationGenerator<boolean> {
    return false;
  }

  *withBaseObjectEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this._realm.types.undefined;
  }

  mark(marks: Set<StaticJsValue>, allocate?: boolean): void {
    this._declarativeRecord.mark(marks, allocate);
    this._objectRecord.mark(marks, allocate);
    this._globalThis.mark(marks, allocate);
  }

  private *_ensureDeclarativeBindingNotDeclared(name: string): EvaluationGenerator<void> {
    if (yield* this.declarativeRecord.hasBindingEvaluator(name)) {
      throw yield* Completion.Throw.create(
        "SyntaxError",
        `Identifier ${name} has already been declared`,
      );
    }
  }
}
