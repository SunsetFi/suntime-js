import { StaticJsValue } from "../../primitives/index.js";

import { StaticJsEnvironment } from "../interfaces/index.js";

import StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";
import StaticJsEnvironmentBindingProvider, {
  StaticJsEnvironmentGetBinding,
} from "./StaticJsEnvironmentBindingProvider.js";

export default abstract class StaticJsBaseEnvironment
  implements StaticJsEnvironment, StaticJsEnvironmentBindingProvider
{
  constructor() {}

  hasBinding(name: string): boolean {
    return this[StaticJsEnvironmentGetBinding](name) !== undefined;
  }

  abstract createMutableBinding(name: string, deletable: boolean): void;

  abstract createImmutableBinding(name: string, strict: boolean): void;

  canDeclareGlobalVar(name: string): boolean {
    return false;
  }

  createGlobalVarBinding(name: string, deletable: boolean): void {
    throw new Error(
      "Cannot create global var binding in non-global environment.",
    );
  }

  initializeBinding(name: string, value: StaticJsValue): void {
    const binding = this[StaticJsEnvironmentGetBinding](name);

    if (binding) {
      if (binding.isInitialized) {
        throw new Error(
          `Cannot initialize binding ${name}: Binding is already initialized.`,
        );
      }

      binding.initialize(value);
    } else {
      throw new Error(
        `Cannot initialize binding ${name}: Binding does not exist.`,
      );
    }
  }

  setMutableBinding(name: string, value: StaticJsValue, strict: boolean): void {
    const binding = this[StaticJsEnvironmentGetBinding](name);

    if (binding) {
      if (!binding.isMutable) {
        if (strict) {
          throw new ReferenceError("Assignment to constant variable.");
        }

        return;
      }

      binding.value = value;
    } else {
      throw new ReferenceError(`Assignment to undeclared variable '${name}'.`);
    }
  }

  getBindingValue(name: string, strict: boolean): StaticJsValue {
    const binding = this[StaticJsEnvironmentGetBinding](name);

    if (binding) {
      return binding.value;
    } else {
      // TODO: Throw StaticJs ReferenceError
      throw new Error(`Cannot get binding ${name}: Binding does not exist.`);
    }
  }

  deleteBinding(name: string): void {
    const binding = this[StaticJsEnvironmentGetBinding](name);

    if (binding) {
      binding.delete();
    } else {
      throw new Error(`Cannot delete binding ${name}: Binding does not exist.`);
    }
  }

  abstract hasThisBinding(): boolean;

  abstract hasSuperBinding(): boolean;

  abstract withBaseObject(): StaticJsValue;

  abstract getThisBinding(): StaticJsValue;

  abstract getSuperBase(): StaticJsValue;

  abstract [StaticJsEnvironmentGetBinding](
    name: string,
  ): StaticJsEnvironmentBinding | undefined;
}
