import { Completion } from "../../../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import toBoolean from "../../algorithms/to-boolean.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import { isStaticJsObjectLike, type StaticJsObjectLike } from "../../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";

import type { StaticJsEnvironmentRecord } from "../StaticJsEnvironmentRecord.js";

import StaticJsEnvironmentRecordBase from "./StaticJsEnvironmentRecordBase.js";

export default class StaticJsObjectEnvironmentRecord extends StaticJsEnvironmentRecordBase {
  constructor(
    private readonly _obj: StaticJsObjectLike,
    private readonly _isWithEnvironment: boolean,
    outerEnv: StaticJsEnvironmentRecord | null,
    private readonly _realm: StaticJsRealm,
  ) {
    super(outerEnv);
  }

  get bindingObject(): StaticJsObjectLike {
    return this._obj;
  }

  *hasBindingEvaluator(name: string): EvaluationGenerator<boolean> {
    const foundBinding = yield* this._obj.hasPropertyEvaluator(name);
    if (!foundBinding) {
      return false;
    }

    if (!this._isWithEnvironment) {
      return true;
    }

    const unscopables = yield* this._obj.getEvaluator(this._realm.types.symbols.unscopables);
    if (isStaticJsObjectLike(unscopables)) {
      const blockedValue = yield* unscopables.getEvaluator(name);
      const isBlocked = yield* toBoolean.js(blockedValue, this._realm);
      if (isBlocked) {
        return false;
      }
    }

    return true;
  }

  *isInitializedEvaluator(name: string): EvaluationGenerator<boolean> {
    const hasProp = yield* this._obj.hasPropertyEvaluator(name);
    if (!hasProp) {
      throw Completion.Throw(
        this._realm.types.error(
          "ReferenceError",
          `Binding ${name} does not exist in this environment`,
        ),
      );
    }

    return true;
  }

  *createMutableBindingEvaluator(name: string, deletable: boolean): EvaluationGenerator<void> {
    yield* this._obj.defineOwnPropertyEvaluator(name, {
      value: this._realm.types.undefined,
      writable: true,
      enumerable: true,
      configurable: deletable,
    });
  }

  *createImmutableBindingEvaluator(_name: string): EvaluationGenerator<void> {
    // Do nothing; all the work is done in initializeBinding
  }

  *initializeBindingEvaluator(name: string, value: StaticJsValue): EvaluationGenerator<void> {
    yield* this.setMutableBindingEvaluator(name, value, false);
  }

  *setMutableBindingEvaluator(
    name: string,
    value: StaticJsValue,
    strict: boolean,
  ): EvaluationGenerator<void> {
    const stillExists = yield* this._obj.hasPropertyEvaluator(name);
    if (!stillExists && strict) {
      throw Completion.Throw(
        this._realm.types.error(
          "ReferenceError",
          `Cannot set uninitialized binding ${name} in strict mode`,
        ),
      );
    }

    yield* this._obj.setEvaluator(name, value, strict);
  }

  *getBindingValueEvaluator(name: string, strict: boolean): EvaluationGenerator<StaticJsValue> {
    const hasProp = yield* this._obj.hasPropertyEvaluator(name);
    if (!hasProp) {
      if (strict) {
        throw Completion.Throw(
          this._realm.types.error(
            "ReferenceError",
            `Binding ${name} does not exist in this environment`,
          ),
        );
      } else {
        return this._realm.types.undefined;
      }
    }

    return yield* this._obj.getEvaluator(name);
  }

  *deleteBindingEvaluator(name: string): EvaluationGenerator<boolean> {
    return yield* this._obj.deleteEvaluator(name);
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

  *getSuperBaseEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this._realm.types.undefined;
  }

  *withBaseObjectEvaluator(): EvaluationGenerator<StaticJsValue> {
    if (this._isWithEnvironment) {
      return this._obj;
    }
    return this._realm.types.undefined;
  }
}
