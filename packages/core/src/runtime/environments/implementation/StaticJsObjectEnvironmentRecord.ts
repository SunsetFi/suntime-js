import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsObject } from "../../types/StaticJsObject.js";
import type { StaticJsValue } from "../../types/StaticJsValue.js";

import StaticJsBaseEnvironmentRecord from "./StaticJsBaseEnvironmentRecord.js";
import type StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";
import { StaticJsEnvironmentGetBinding } from "./StaticJsEnvironmentBindingProvider.js";

export default class StaticJsObjectEnvironmentRecord extends StaticJsBaseEnvironmentRecord {
  constructor(
    realm: StaticJsRealm,
    private readonly _obj: StaticJsObject,
  ) {
    super(realm);
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
    yield* this._obj.definePropertyEvaluator(name, {
      writable: false,
      enumerable: true,
      configurable: false,
      value,
    });
  }

  [StaticJsEnvironmentGetBinding](
    name: string,
  ): StaticJsEnvironmentBinding | undefined {
    const obj = this._obj;
    const descriptor = obj.getPropertyDescriptorSync(name);
    if (!descriptor) {
      return undefined;
    }

    return {
      isInitialized: true,
      isDeletable: true,
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
