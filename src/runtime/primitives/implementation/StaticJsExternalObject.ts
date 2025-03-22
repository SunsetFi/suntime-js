import { uniq } from "lodash-es";

import {
  StaticJsObject,
  StaticJsObjectPropertyDescriptor,
} from "../interfaces/StaticJsObject.js";
import { StaticJsValue } from "../interfaces/StaticJsValue.js";

import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";

import StaticJsEnvUndefined from "./StaticJsEnvUndefined.js";

export interface StaticJsRuntimeObjectValue {
  get?(): StaticJsValue;
  set?(value: StaticJsValue): void;
}

export default class StaticJsExternalObject implements StaticJsObject {
  private readonly _mutationTarget: StaticJsObject | undefined;
  private readonly _properties = new Map<string, StaticJsRuntimeObjectValue>();

  constructor(
    properties: Record<string, StaticJsRuntimeObjectValue>,
    mutationTarget?: StaticJsObject,
  ) {
    this._mutationTarget = mutationTarget;

    // Enumerate the object; this shouldn't pick up prototypes.
    for (const [propertyName, propertyValue] of Object.entries(properties)) {
      this._properties.set(propertyName, propertyValue);
    }
  }

  get [StaticJsTypeSymbol]() {
    return "object" as const;
  }

  get typeOf() {
    return "object" as const;
  }

  toJs() {
    const result: Record<string, unknown> = {};
    // TODO: Inherit from mutationTarget
    for (const [key, value] of this._properties) {
      result[key] = value.get?.()?.toJs();
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

  hasProperty(name: string): boolean {
    if (this._mutationTarget?.hasProperty(name)) {
      return true;
    }

    return this._properties.has(name);
  }

  getProperty(name: string): StaticJsValue {
    if (this._mutationTarget?.hasProperty(name)) {
      return this._mutationTarget.getProperty(name);
    }

    return this._properties.get(name)?.get?.() ?? StaticJsEnvUndefined.Instance;
  }

  getPropertyDescriptor(
    name: string,
  ): StaticJsObjectPropertyDescriptor | undefined {
    if (this._mutationTarget?.hasProperty(name)) {
      return this._mutationTarget.getPropertyDescriptor(name);
    }

    const value = this._properties.get(name);
    if (!value) {
      return undefined;
    }

    return {
      configurable: false,
      writable: true,
      enumerable: true,
      get: value.get,
      set: value.set,
    };
  }

  getIsReadOnlyProperty(name: string): boolean {
    if (this._mutationTarget) {
      return this._mutationTarget.getIsReadOnlyProperty(name);
    }

    return true;
  }

  setProperty(name: string, value: StaticJsValue): void {
    if (this._mutationTarget) {
      this._mutationTarget.setProperty(name, value);
      return;
    }

    // TODO: Do something with source maps for the runtime.
    throw new Error("Object is not writable.");
  }

  defineProperty(
    name: string,
    descriptor: StaticJsObjectPropertyDescriptor,
  ): void {
    if (this._mutationTarget) {
      this._mutationTarget.defineProperty(name, descriptor);
      return;
    }

    throw new Error("Object is not writable.");
  }

  deleteProperty(name: string): boolean {
    // FIXME: Just deleting from mutationTarget will make us fall back to our own property.
    // We need to save the deletions if we want to support that.

    return false;
  }

  getKeys(): string[] {
    return uniq([
      ...Array.from(this._properties.keys()),
      ...(this._mutationTarget?.getKeys?.() ?? []),
    ]);
  }
}
