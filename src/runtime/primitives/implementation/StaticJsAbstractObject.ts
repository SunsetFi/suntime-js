import {
  isStaticJsObjectPropertyDescriptorGetter,
  isStaticJsObjectPropertyDescriptorValue,
  isStaticJsValue,
  StaticJsObject,
  StaticJsObjectPropertyDescriptor,
  StaticJsValue,
  validateStaticJsObjectPropertyDescriptor,
} from "../interfaces/index.js";

import StaticJsUndefined from "../factories/StaticJsUndefined.js";

import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
import { StaticJsPrimitive } from "../index.js";

export default abstract class StaticJsAbstractObject<TTypeSymbol extends string>
  implements StaticJsObject<TTypeSymbol>
{
  private _extensible: boolean = true;
  constructor(
    private readonly _typeSymbol: TTypeSymbol,
    private _prototype: StaticJsObject | null,
  ) {}

  get [StaticJsTypeSymbol](): TTypeSymbol {
    return this._typeSymbol;
  }

  get typeOf(): StaticJsPrimitive["typeOf"] {
    return "object" as const;
  }

  get prototype(): StaticJsObject | null {
    return this._prototype;
  }

  get extensible(): boolean {
    return this._extensible;
  }

  abstract getOwnKeys(): string[];

  getOwnEnumerableKeys(): string[] {
    return this.getOwnKeys().filter((key) => {
      const decl = this.getPropertyDescriptor(key);
      return decl?.enumerable ?? false;
    });
  }

  setPrototypeOf(proto: StaticJsObject | null): void {
    if (!this._extensible) {
      // TODO: Use a real error
      throw new Error("Object is not extensible.");
    }

    this._prototype = proto;
  }

  getPropertyDescriptor(
    name: string,
  ): StaticJsObjectPropertyDescriptor | undefined {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let target: StaticJsObject | null = this;
    let descr: StaticJsObjectPropertyDescriptor | undefined;
    do {
      descr = target.getOwnPropertyDescriptor(name);
    } while (descr === undefined && (target = target.prototype));
    return descr;
  }

  abstract getOwnPropertyDescriptor(
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
    } catch (e: unknown) {
      const err = e as Error;
      err.message = `Property ${name} has an invalid property descriptor: ${(err as Error).message}`;
      throw err;
    }

    let value: unknown;
    if (isStaticJsObjectPropertyDescriptorValue(decl)) {
      value = decl.value;
    } else if (isStaticJsObjectPropertyDescriptorGetter(decl)) {
      value = decl.get();
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

  setProperty(name: string, value: StaticJsValue, strict: boolean): void {
    const ownDecl = this.getOwnPropertyDescriptor(name);
    if (ownDecl) {
      // It's our own.  Set it.
      if (ownDecl.set) {
        ownDecl.set(value, strict);
        return;
      } else if (ownDecl.writable) {
        this._setWritableDataProperty(name, value);
        return;
      }

      // Fail silently.
      return;
    }

    const decl = this.getPropertyDescriptor(name);
    if (decl) {
      if (decl.writable === true || (decl.writable !== false && decl.set)) {
        // It's an inherited writable property.

        // only set if we have a setter.
        if (decl.set) {
          decl.set(value, strict);
        }

        // If no setter but a property, it's a data property.
        // Create a new property on us.
        this._defineProperty(name, {
          configurable: true,
          enumerable: true,
          writable: true,
          value,
        });
        return;
      }
      // We are not writable.
      if (strict) {
        // TODO: Throw real error
        throw new Error(`Property ${name} is not writable.`);
      }

      // Fail silently.
      return;
    }

    // Doesn't exist anywhere.  Create it on us.
    this._defineProperty(name, {
      configurable: true,
      enumerable: true,
      writable: true,
      value,
    });
  }

  defineProperty(
    name: string,
    descriptor: StaticJsObjectPropertyDescriptor,
  ): void {
    const decl = this.getOwnPropertyDescriptor(name);

    if (!decl) {
      this._defineProperty(name, descriptor);
      return;
    }

    if (!decl.configurable) {
      // FIXME: Throw real error
      throw new Error(`Cannot redefine property ${name}`);
    }

    this._defineProperty(name, descriptor);
  }

  deleteProperty(name: string): boolean {
    const decl = this.getOwnPropertyDescriptor(name);
    if (decl === undefined || !decl.configurable) {
      return false;
    }

    this._deleteConfigurableProperty(name);
    return true;
  }

  preventExtension(): void {
    this._extensible = false;
  }

  toJs(): unknown {
    // TODO: Cache this?
    // TODO: Use a proxy object and support setting and defining values to it.
    // TODO: Would it be workable to just make the constructor always return an external object and just give it
    // a new object to wrap?
    const result: Record<string, unknown> = {};
    for (const key of this.getOwnKeys()) {
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

  protected abstract _setWritableDataProperty(
    name: string,
    value: StaticJsValue,
  ): void;

  protected abstract _defineProperty(
    name: string,
    descriptor: StaticJsObjectPropertyDescriptor,
  ): void;

  protected abstract _deleteConfigurableProperty(name: string): void;
}
