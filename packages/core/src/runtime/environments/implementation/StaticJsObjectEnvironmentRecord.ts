import { Completion } from "../../../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import { get } from "../../algorithms/get.js";
import { set } from "../../algorithms/set.js";
import { toBoolean } from "../../algorithms/to-boolean.js";
import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { isStaticJsObject, type StaticJsObject } from "../../types/StaticJsObject.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";
import type { StaticJsEnvironmentRecord } from "../StaticJsEnvironmentRecord.js";

import { StaticJsEnvironmentRecordBase } from "./StaticJsEnvironmentRecordBase.js";

export class StaticJsObjectEnvironmentRecord extends StaticJsEnvironmentRecordBase {
  constructor(
    private readonly _obj: StaticJsObject,
    private readonly _isWithEnvironment: boolean,
    outerEnv: StaticJsEnvironmentRecord | null,
    private readonly _realm: StaticJsRealm,
  ) {
    super(outerEnv);
  }

  get bindingObject(): StaticJsObject {
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

    const unscopables = yield* get(this._obj, this._realm.types.symbols.unscopables);
    if (isStaticJsObject(unscopables)) {
      const blockedValue = yield* get(unscopables, name);
      const isBlocked = yield* toBoolean.js(blockedValue);
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
        "ReferenceError",
        `Binding ${name} does not exist in this environment`,
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
        "ReferenceError",
        `Cannot set uninitialized binding ${name} in strict mode`,
      );
    }

    yield* set(this._obj, name, value, strict);
  }

  *getBindingValueEvaluator(name: string, strict: boolean): EvaluationGenerator<StaticJsValue> {
    const hasProp = yield* this._obj.hasPropertyEvaluator(name);
    if (!hasProp) {
      if (strict) {
        throw Completion.Throw(
          "ReferenceError",
          `Binding ${name} does not exist in this environment`,
        );
      } else {
        return this._realm.types.undefined;
      }
    }

    return yield* get(this._obj, name);
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
