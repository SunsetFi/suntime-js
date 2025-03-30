import { EvaluationGenerator } from "../../../evaluator/internal.js";
import {
  StaticJsObject,
  StaticJsUndefined,
  StaticJsValue,
} from "../../types/index.js";
import StaticJsBaseEnvironment from "./StaticJsBaseEnvironmentRecord.js";
import StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";
import { StaticJsEnvironmentGetBinding } from "./StaticJsEnvironmentBindingProvider.js";

export default class StaticJsObjectEnvironmentRecord extends StaticJsBaseEnvironment {
  constructor(private readonly _obj: StaticJsObject) {
    super();
  }

  *createMutableBindingEvaluator(
    name: string,
    deletable: boolean,
  ): EvaluationGenerator<void> {
    if (!deletable) {
      throw new Error(
        "Non-deletable bindings are not supported in object environments.",
      );
    }

    // FIXME: What to use for strict?
    yield* this._obj.setPropertyEvaluator(name, StaticJsUndefined(), true);
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
      name,
      get value() {
        return obj.getProperty(name);
      },
      set value(value: StaticJsValue) {
        obj.setProperty(name, value, false);
      },
      isInitialized: true,
      isDeletable: true,
      isMutable: true,
      initialize() {
        throw new Error("Cannot reinitialize binding.");
      },
      delete() {
        obj.deleteProperty(name);
      },
    } satisfies StaticJsEnvironmentBinding;
  }
}
