import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsAllocation } from "#memory/StaticJsAllocation.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { allocated } from "#memory/allocated.js";

import {
  StaticJsDeclarativeBinding,
  type StaticJsDeclarativeBindingCreateParams,
} from "./StaticJsDeclarativeBinding.js";

export interface StaticJsValueDeclarativeBindingCreateParams extends StaticJsDeclarativeBindingCreateParams {}

export class StaticJsValueDeclarativeBinding extends StaticJsDeclarativeBinding {
  private _value: StaticJsValue | null = null;

  static create(
    params: StaticJsValueDeclarativeBindingCreateParams,
  ): StaticJsValueDeclarativeBinding {
    return allocated(new StaticJsValueDeclarativeBinding(params));
  }

  protected constructor(params: StaticJsValueDeclarativeBindingCreateParams) {
    super(params);
  }

  *isInitialized(): EvaluationGenerator<boolean> {
    return this._value !== null;
  }

  *initialize(value: StaticJsValue): EvaluationGenerator<void> {
    if (this._value) {
      throw new StaticJsEngineError(`Cannot initialize binding ${this.name}: Already initialized`);
    }
    this._value = value;
  }

  *set(value: StaticJsValue, strict: boolean): EvaluationGenerator<void> {
    if (this.isStrict) {
      strict = true;
    }

    if (this._value === null) {
      throw yield* Completion.Throw.create(
        "ReferenceError",
        `Cannot set value of uninitialized binding ${this.name}`,
      );
    } else if (this.isMutable) {
      this._value = value;
    } else if (strict) {
      throw yield* Completion.Throw.create("TypeError", `Assignment to constant variable`);
    }
  }

  *get(): EvaluationGenerator<StaticJsValue> {
    if (!this._value) {
      throw yield* Completion.Throw.create(
        "ReferenceError",
        `Cannot get value of uninitialized binding ${this.name}`,
      );
    }
    return this._value;
  }

  mark(set: Set<StaticJsAllocation>): void {
    if (set.has(this)) {
      return;
    }

    set.add(this);
    this._value?.mark(set);
  }

  allocateSelf(): void {}
}
