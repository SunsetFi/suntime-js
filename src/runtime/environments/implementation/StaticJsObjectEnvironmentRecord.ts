import {
  StaticJsObject,
  StaticJsUndefined,
  StaticJsValue,
} from "../../primitives/index.js";
import StaticJsBaseEnvironment from "./StaticJsBaseEnvironmentRecord.js";
import StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";
import { StaticJsEnvironmentGetBinding } from "./StaticJsEnvironmentBindingProvider.js";

export default class StaticJsObjectEnvironmentRecord extends StaticJsBaseEnvironment {
  constructor(private readonly _obj: StaticJsObject) {
    super();
  }

  createMutableBinding(name: string, deletable: boolean): void {
    if (!deletable) {
      throw new Error(
        "Non-deletable bindings are not supported in object environments.",
      );
    }

    this._obj.setProperty(name, StaticJsUndefined());
  }

  createImmutableBinding(_name: string): void {
    // Do nothing; all the work is done in initializeBinding
    // this._obj.defineProperty(name, {
    //   writable: false,
    //   enumerable: true,
    //   configurable: false,
    // });
  }

  initializeBinding(name: string, value: StaticJsValue): void {
    this._obj.defineProperty(name, {
      writable: false,
      enumerable: true,
      configurable: false,
      value,
    });
  }

  hasThisBinding(): boolean {
    return false;
  }

  hasSuperBinding(): boolean {
    return false;
  }

  withBaseObject(): StaticJsValue {
    return StaticJsUndefined();
  }

  getThisBinding(): StaticJsValue {
    return StaticJsUndefined();
  }

  getSuperBase(): StaticJsValue {
    return StaticJsUndefined();
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
        if (descriptor.set && descriptor.writable !== false) {
          descriptor.set(value);
        } else if (descriptor.writable) {
          obj.setProperty(name, value);
        }

        // Object's no-op without errors when setting an unsettable binding,
        // even for global
      },
      isInitialized: true,
      isDeletable: true,
      isMutable: true,
      initialize() {
        throw new Error("Cannot reinitialize binding.");
      },
      delete() {
        // TODO: Actually delete it.
        obj.setProperty(name, StaticJsUndefined());
      },
    } satisfies StaticJsEnvironmentBinding;
  }
}
