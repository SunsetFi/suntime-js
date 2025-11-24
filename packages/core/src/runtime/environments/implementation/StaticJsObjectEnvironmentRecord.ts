import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsObjectLike } from "../../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";

import StaticJsBaseEnvironmentRecord from "./StaticJsBaseEnvironmentRecord.js";
import type StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";
import { StaticJsEnvironmentGetBinding } from "./StaticJsEnvironmentBindingProvider.js";

export default class StaticJsObjectEnvironmentRecord extends StaticJsBaseEnvironmentRecord {
  constructor(
    realm: StaticJsRealm,
    private readonly _obj: StaticJsObjectLike,
  ) {
    super(realm);
  }

  get bindingObject(): StaticJsObjectLike {
    return this._obj;
  }

  *createMutableBindingEvaluator(
    name: string,
    deletable: boolean,
  ): EvaluationGenerator<void> {
    yield* this._obj.definePropertyEvaluator(name, {
      value: this.realm.types.undefined,
      writable: true,
      enumerable: true,
      configurable: deletable,
    });
  }

  *createImmutableBindingEvaluator(_name: string): EvaluationGenerator<void> {
    // Do nothing; all the work is done in initializeBinding
  }

  *initializeBindingEvaluator(
    name: string,
    value: StaticJsValue,
  ): EvaluationGenerator<void> {
    yield* this._obj.setPropertyEvaluator(name, value, false);
  }

  *[StaticJsEnvironmentGetBinding](
    name: string,
  ): EvaluationGenerator<StaticJsEnvironmentBinding | undefined> {
    const obj = this._obj;
    const descriptor = yield* obj.getPropertyDescriptorEvaluator(name);
    if (!descriptor) {
      return undefined;
    }

    return {
      isInitialized: true,
      isDeletable: descriptor.configurable,
      isMutable: true,
      *initialize() {
        throw new Error("Cannot reinitialize binding.");
      },
      *get() {
        return yield* obj.getPropertyEvaluator(name);
      },
      *set(value: StaticJsValue) {
        yield* obj.setPropertyEvaluator(name, value, false);
      },
      *delete() {
        yield* obj.deletePropertyEvaluator(name);
      },
    } as StaticJsEnvironmentBinding;
  }
}
