import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import { StaticJsRealm } from "../../realm/interfaces/StaticJsRealm.js";

import { StaticJsObject } from "../../types/interfaces/StaticJsObject.js";
import { StaticJsValue } from "../../types/interfaces/StaticJsValue.js";

import StaticJsBaseEnvironmentRecord from "./StaticJsBaseEnvironment.js";
import StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";
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
    const descriptor = obj.getPropertyDescriptor(name);
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
