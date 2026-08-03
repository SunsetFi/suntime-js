import type { EvaluationContext } from "#evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsAllocation, StaticJsAllocator } from "#memory/StaticJsAllocation.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { allocated } from "#memory/allocated.js";
import { StaticJsMemoryAllocationTag } from "#memory/StaticJsMemoryAllocationTag.js";

import type { StaticJsEnvironmentRecord } from "../StaticJsEnvironmentRecord.js";
import type { StaticJsDeclarativeBinding } from "./StaticJsDeclarativeBinding.js";

import {
  StaticJsEnvironmentRecordBase,
  type StaticJsEnvironmentRecordBaseCreateParams,
} from "./StaticJsEnvironmentRecordBase.js";
import { StaticJsValueDeclarativeBinding } from "./StaticJsValueDeclarativeBinding.js";

export interface StaticJsDeclarativeEnvironmentRecordCreateParams extends StaticJsEnvironmentRecordBaseCreateParams {
  outerEnv: StaticJsEnvironmentRecord | null;
}

export class StaticJsDeclarativeEnvironmentRecord extends StaticJsEnvironmentRecordBase {
  static from(context: EvaluationContext) {
    return StaticJsDeclarativeEnvironmentRecord.create({
      outerEnv: context.lexicalEnv,
      realm: context.realm,
    });
  }

  static create(
    params: StaticJsDeclarativeEnvironmentRecordCreateParams,
  ): StaticJsDeclarativeEnvironmentRecord {
    return allocated(new StaticJsDeclarativeEnvironmentRecord(params));
  }

  protected readonly _realm: StaticJsRealm;
  protected readonly _bindings: Map<string, StaticJsDeclarativeBinding> = new Map();

  protected constructor({ outerEnv, realm }: StaticJsDeclarativeEnvironmentRecordCreateParams) {
    super(outerEnv);
    this._realm = realm;
  }

  *inspectBindingsEvaluator(): EvaluationGenerator<Record<string, StaticJsValue | null>> {
    const result: Record<string, StaticJsValue | null> = {};
    for (const [name, binding] of this._bindings.entries()) {
      result[name] = yield* binding.get();
    }
    return result;
  }

  *hasBindingEvaluator(name: string): EvaluationGenerator<boolean> {
    return this._bindings.has(name);
  }

  *isInitializedEvaluator(name: string): EvaluationGenerator<boolean> {
    const binding = this._bindings.get(name);
    if (!binding) {
      throw yield* Completion.Throw.create(
        "ReferenceError",
        `Binding ${name} does not exist in this environment`,
      );
    }

    return yield* binding.isInitialized();
  }

  *initializeBindingEvaluator(name: string, value: StaticJsValue): EvaluationGenerator<void> {
    const binding = this._bindings.get(name);
    if (!binding) {
      throw yield* Completion.Throw.create(
        "ReferenceError",
        `Binding ${name} does not exist in this environment`,
      );
    }

    yield* binding.initialize(value);
  }

  *createMutableBindingEvaluator(name: string, deletable: boolean): EvaluationGenerator<void> {
    yield* this._assertBindingNotDeclared(name);

    // Note: Our set entry and extranious data costs something too...
    this._realm.memory.allocate(StaticJsMemoryAllocationTag.RawString, name);

    this._bindings.set(
      name,
      StaticJsValueDeclarativeBinding.create({
        realm: this._realm,
        name,
        isMutable: true,
        isStrict: false,
        isDeletable: deletable,
      }),
    );
  }

  *createImmutableBindingEvaluator(name: string, strict: boolean): EvaluationGenerator<void> {
    // TODO: Do we throw if not strict?
    yield* this._assertBindingNotDeclared(name);

    // Note: Our set entry and extranious data costs something too...
    this._realm.memory.allocate(StaticJsMemoryAllocationTag.RawString, name);

    this._bindings.set(
      name,
      StaticJsValueDeclarativeBinding.create({
        realm: this._realm,
        name,
        isMutable: false,
        isStrict: strict,
        isDeletable: false,
      }),
    );
  }

  *setMutableBindingEvaluator(
    name: string,
    value: StaticJsValue,
    strict: boolean,
  ): EvaluationGenerator<void> {
    const binding = this._bindings.get(name);
    if (!binding) {
      if (strict) {
        throw yield* Completion.Throw.create("ReferenceError", `${name} is not defined`);
      }

      yield* this.createMutableBindingEvaluator(name, true);
      yield* this.initializeBindingEvaluator(name, value);
      return;
    }

    if (binding.isStrict) {
      strict = true;
    }

    yield* binding.set(value, strict);
  }

  *getBindingValueEvaluator(name: string, _strict: boolean): EvaluationGenerator<StaticJsValue> {
    const binding = this._bindings.get(name);
    if (!binding) {
      throw yield* Completion.Throw.create("ReferenceError", `${name} is not defined`);
    }

    return yield* binding.get();
  }

  *deleteBindingEvaluator(name: string): EvaluationGenerator<boolean> {
    const binding = this._bindings.get(name);
    if (!binding) {
      throw new StaticJsEngineError(`Binding ${name} does not exist in this environment`);
    }

    if (!binding.isDeletable) {
      return false;
    }

    this._bindings.delete(name);
    return true;
  }

  *hasThisBindingEvaluator(): EvaluationGenerator<boolean> {
    return false;
  }

  *getThisBindingEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this._realm.types.undefined;
  }

  *hasSuperBindingEvaluator(): EvaluationGenerator<boolean> {
    return false;
  }

  *withBaseObjectEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this._realm.types.undefined;
  }

  override mark(marks: Set<StaticJsAllocation>): void {
    if (marks.has(this)) {
      return;
    }

    super.mark(marks);

    for (const binding of this._bindings.values()) {
      binding.mark(marks);
    }
  }

  override allocateSelf(
    allocate: StaticJsAllocator = this._realm.memory.allocate.bind(this._realm.memory),
  ): void {
    super.allocateSelf(allocate);
    for (const name of this._bindings.keys()) {
      allocate(StaticJsMemoryAllocationTag.RawString, name);
    }
  }

  protected *_assertBindingNotDeclared(name: string) {
    if (this._bindings.has(name)) {
      throw yield* Completion.Throw.create(
        "SyntaxError",
        `Identifier ${name} has already been declared`,
      );
    }
  }
}
