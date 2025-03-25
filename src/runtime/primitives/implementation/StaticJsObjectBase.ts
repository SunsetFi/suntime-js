import hasOwnProperty from "../../../internal/has-own-property.js";

import {
  isStaticJsValue,
  StaticJsObject,
  StaticJsObjectPropertyDescriptor,
  StaticJsValue,
  validateStaticJsObjectPropertyDescriptor,
} from "../interfaces/index.js";

import StaticJsUndefined from "../factories/StaticJsUndefined.js";

import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";

export default abstract class StaticJsObjectBase<
  TTypeSymbol extends StaticJsObject[typeof StaticJsTypeSymbol],
> implements StaticJsObject<TTypeSymbol>
{
  constructor(private readonly _typeSymbol: TTypeSymbol) {}

  get [StaticJsTypeSymbol](): TTypeSymbol {
    return this._typeSymbol;
  }

  get typeOf() {
    return "object" as const;
  }

  abstract enumerateKeys(): string[];

  abstract getPropertyDescriptor(
    name: string,
  ): StaticJsObjectPropertyDescriptor | undefined;

  hasProperty(name: string): boolean {
    const decl = this.getPropertyDescriptor(name);
    return decl !== undefined;
  }

  getProperty(name: string): StaticJsValue {
    const decl = this.getPropertyDescriptor(name);
    if (decl === undefined) {
      return StaticJsUndefined();
    }

    // This validation might be a bit heavy for performance...

    try {
      validateStaticJsObjectPropertyDescriptor(decl);
    } catch (e: any) {
      e = `Property ${name} has an invalid property descriptor: ${e.message}`;
      throw e;
    }

    let value: unknown;
    if (hasOwnProperty(decl, "value")) {
      value = decl.value;
    } else if (hasOwnProperty(decl, "get")) {
      value = (decl.get as Function)();
    } else {
      return StaticJsUndefined();
    }

    if (!isStaticJsValue(value)) {
      throw new Error(
        `Property ${name} descriptor returned an invalid value: ${value}`,
      );
    }

    return value;
  }

  getIsReadOnlyProperty(name: string): boolean {
    const decl = this.getPropertyDescriptor(name);
    if (decl === undefined) {
      return false;
    }

    // Unset means not writable.
    return !(decl.writable ?? false);
  }

  setProperty(name: string, value: StaticJsValue): void {
    const decl = this.getPropertyDescriptor(name);
    if (decl === undefined) {
      // Set with default values for a passive set
      this._defineNewProperty(name, {
        configurable: true,
        enumerable: true,
        writable: true,
        value,
      });
      return;
    }

    if (!decl.writable) {
      // FIXME: Throw real error
      throw new Error(`Property ${name} is not writable`);
    }

    if (hasOwnProperty(decl, "set")) {
      decl.set(value);
      return;
    } else {
      this._setWritablePropertyByValue(name, value);
    }
  }

  defineProperty(
    name: string,
    descriptor: StaticJsObjectPropertyDescriptor,
  ): void {
    const decl = this.getPropertyDescriptor(name);

    if (!decl) {
      this._defineNewProperty(name, descriptor);
      return;
    }

    if (!decl.configurable) {
      // FIXME: Throw real error
      throw new Error(`Cannot redefine property ${name}`);
    }

    this._reconfigureProperty(name, descriptor);
  }

  deleteProperty(name: string): boolean {
    const decl = this.getPropertyDescriptor(name);
    if (decl === undefined || !decl.configurable) {
      return false;
    }

    this._deleteConfigurableProperty(name);
    return true;
  }

  toJs() {
    // TODO: Cache this?
    // TODO: Use a proxy object and support setting and defining values to it.
    // TODO: Would it be workable to just make the constructor always return an external object and just give it
    // a new object to wrap?
    const result: Record<string, any> = {};
    for (const key of this.enumerateKeys()) {
      result[key] = this.getProperty(key).toJs();
    }
    return result;
  }

  toString(): string {
    return "[object Object]";
  }

  toNumber(): number {
    return Number.NaN;
  }

  toBoolean(): boolean {
    return true;
  }

  protected abstract _setWritablePropertyByValue(
    name: string,
    value: StaticJsValue,
  ): void;

  protected abstract _defineNewProperty(
    name: string,
    descriptor: StaticJsObjectPropertyDescriptor,
  ): void;

  protected abstract _reconfigureProperty(
    name: string,
    descriptor: StaticJsObjectPropertyDescriptor,
  ): void;

  protected abstract _deleteConfigurableProperty(name: string): void;
}
