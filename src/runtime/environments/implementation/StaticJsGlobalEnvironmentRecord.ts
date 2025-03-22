import {
  StaticJsObject,
  StaticJsUndefined,
  StaticJsValue,
} from "../../primitives/index.js";

import { StaticJsEnvironment } from "../interfaces/index.js";

import StaticJsDeclarativeEnvironmentRecord from "./StaticJsDeclarativeEnvironmentRecord.js";
import StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";
import StaticJsEnvironmentBindingProvider, {
  StaticJsEnvironmentGetBinding,
} from "./StaticJsEnvironmentBindingProvider.js";
import StaticJsObjectEnvironmentRecord from "./StaticJsObjectEnvironmentRecord.js";

export default class StaticJsGlobalEnvironmentRecord
  implements StaticJsEnvironment, StaticJsEnvironmentBindingProvider
{
  private readonly _declarativeRecord =
    new StaticJsDeclarativeEnvironmentRecord();
  private readonly _objectRecord;

  constructor(
    private readonly _globalThis: StaticJsValue,
    globalObject: StaticJsObject,
  ) {
    this._objectRecord = new StaticJsObjectEnvironmentRecord(globalObject);

    this._objectRecord.createImmutableBinding("globalThis");
    this._objectRecord.initializeBinding("globalThis", this._globalThis);

    this._objectRecord.createImmutableBinding("global");
    this._objectRecord.initializeBinding("global", globalObject);
  }

  // TODO: `var` declarations are handled specially, probably hoist, and should go on the globalObject
  // https://tc39.es/ecma262/#sec-createglobalvarbinding

  hasBinding(name: string): boolean {
    return (
      this._declarativeRecord.hasBinding(name) ||
      this._objectRecord.hasBinding(name)
    );
  }

  createMutableBinding(name: string, deletable: boolean): void {
    // Both need to be checked first
    if (this.hasBinding(name)) {
      throw new Error(`Cannot create binding ${name}: Binding already exists.`);
    }
    this._declarativeRecord.createMutableBinding(name, deletable);
  }

  createImmutableBinding(name: string): void {
    // Both need to be checked first
    if (this.hasBinding(name)) {
      throw new Error(`Cannot create binding ${name}: Binding already exists.`);
    }
    this._declarativeRecord.createImmutableBinding(name);
  }

  canDeclareGlobalVar(name: string): boolean {
    // TODO: Is our global object extensible?
    return !this._declarativeRecord.hasBinding(name);
  }

  createGlobalVarBinding(name: string, deletable: boolean): void {
    if (!this.canDeclareGlobalVar(name)) {
      return;
    }

    this._objectRecord.createMutableBinding(name, deletable);
  }

  initializeBinding(name: string, value: StaticJsValue): void {
    const binding =
      this._declarativeRecord[StaticJsEnvironmentGetBinding](name) ??
      this._objectRecord[StaticJsEnvironmentGetBinding](name);
    if (!binding) {
      throw new Error(
        `Cannot initialize binding ${name}: Binding does not exist.`,
      );
    }

    if (binding.isInitialized) {
      throw new Error(
        `Cannot initialize binding ${name}: Binding is already initialized.`,
      );
    }

    binding.initialize(value);
  }

  setMutableBinding(name: string, value: StaticJsValue, strict: boolean): void {
    let binding =
      this._declarativeRecord[StaticJsEnvironmentGetBinding](name) ??
      this._objectRecord[StaticJsEnvironmentGetBinding](name);

    if (!binding) {
      if (strict) {
        throw new ReferenceError(
          `Assignment to undeclared variable '${name}'.`,
        );
      }

      this._objectRecord.createMutableBinding(name, true);
      binding = this._objectRecord[StaticJsEnvironmentGetBinding](name)!;
    }

    if (!binding.isMutable) {
      if (strict) {
        // TODO: throw StaticJs TypeError
        throw new TypeError("Assignment to constant variable.");
      }

      return;
    }

    binding.value = value;
  }

  getBindingValue(name: string): StaticJsValue {
    const binding =
      this._declarativeRecord[StaticJsEnvironmentGetBinding](name) ??
      this._objectRecord[StaticJsEnvironmentGetBinding](name);
    if (!binding) {
      throw new Error(`Cannot get binding ${name}: Binding does not exist.`);
    }

    if (!binding.isInitialized) {
      throw new ReferenceError(`Cannot access '${name} before initialization.`);
    }

    return binding.value;
  }

  deleteBinding(name: string): void {
    const binding =
      this._declarativeRecord[StaticJsEnvironmentGetBinding](name) ??
      this._objectRecord[StaticJsEnvironmentGetBinding](name);
    if (!binding) {
      throw new Error(`Cannot delete binding ${name}: Binding does not exist.`);
    }

    binding.delete();
  }

  hasThisBinding(): boolean {
    return true;
  }

  hasSuperBinding(): boolean {
    return false;
  }

  withBaseObject(): StaticJsValue {
    return StaticJsUndefined();
  }

  getThisBinding(): StaticJsValue {
    return this._globalThis;
  }

  getSuperBase(): StaticJsValue {
    return StaticJsUndefined();
  }

  [StaticJsEnvironmentGetBinding](
    name: string,
  ): StaticJsEnvironmentBinding | undefined {
    return (
      this._declarativeRecord[StaticJsEnvironmentGetBinding](name) ??
      this._objectRecord[StaticJsEnvironmentGetBinding](name)
    );
  }
}
