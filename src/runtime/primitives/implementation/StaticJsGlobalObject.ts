import hasOwnProperty from "../../../internal/has-own-property.js";

import StaticJsUndefined from "../factories/StaticJsUndefined.js";
import {
  StaticJsObject,
  StaticJsObjectPropertyDescriptor,
  StaticJsValue,
  isStaticJsValue,
} from "../interfaces/index.js";

import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";

export interface StaticJsGlobalObjectPropertyDecl {
  value: StaticJsValue;
  writable?: boolean;
  enumerable?: boolean;
  configurable?: boolean;
}

/**
 * A special-case StaticJsObject that can provide additional properties as passives.
 * This exists so that consumers can pass a StaticJsObject as a global object without having to worry
 * about environment top-level global properties.
 */
export default class StaticJsGlobalObject implements StaticJsObject {
  private readonly _target: StaticJsObject;
  private readonly _passives: Record<string, StaticJsGlobalObjectPropertyDecl>;

  constructor(
    target: StaticJsObject,
    passives: Record<string, StaticJsGlobalObjectPropertyDecl>,
  ) {
    if (!isStaticJsValue(target)) {
      throw new Error("Target must be a StaticJsValue");
    }

    Object.entries(passives).forEach(([name, prop]) => {
      if (!isStaticJsValue(prop.value)) {
        throw new Error(`Property ${name} must be a StaticJsValue`);
      }
    });

    this._target = target;
    this._passives = passives;
  }

  hasProperty(name: string): boolean {
    return (
      this._target.hasProperty(name) || hasOwnProperty(this._passives, name)
    );
  }

  getProperty(name: string): StaticJsValue {
    if (this._target.hasProperty(name)) {
      return this._target.getProperty(name);
    }

    if (hasOwnProperty(this._passives, name)) {
      return this._passives[name].value;
    }

    return StaticJsUndefined();
  }

  getPropertyDescriptor(
    name: string,
  ): StaticJsObjectPropertyDescriptor | undefined {
    const targetDescriptor = this._target.getPropertyDescriptor(name);
    if (targetDescriptor) {
      return targetDescriptor;
    }

    if (hasOwnProperty(this._passives, name)) {
      return {
        ...this._passives[name],
      };
    }

    return undefined;
  }

  defineProperty(
    name: string,
    descriptor: StaticJsObjectPropertyDescriptor,
  ): void {
    if (this.hasProperty(name)) {
      // TODO: Proper error type.
      throw new Error(`Cannot redefine property: ${name}`);
    }

    this._target.defineProperty(name, descriptor);
  }

  getIsReadOnlyProperty(name: string): boolean {
    return this._target.getIsReadOnlyProperty(name);
  }

  setProperty(name: string, value: StaticJsValue): void {
    return this._target.setProperty(name, value);
  }

  deleteProperty(name: string): boolean {
    if (hasOwnProperty(this._passives, name)) {
      return false;
    }

    return this._target.deleteProperty(name);
  }

  enumerateKeys(): string[] {
    return [...this._target.enumerateKeys(), ...Object.keys(this._passives)];
  }

  get [StaticJsTypeSymbol]() {
    return "object" as const;
  }

  get typeOf() {
    return "object" as const;
  }

  toJs() {
    // Just get whatever the target was, to preserve references.
    return this._target.toJs();
  }

  toString(): string {
    return this._target.toString();
  }

  toNumber(): number {
    return this._target.toNumber();
  }

  toBoolean(): boolean {
    return this._target.toBoolean();
  }
}
