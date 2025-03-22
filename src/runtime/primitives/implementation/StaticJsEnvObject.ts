import { StaticJsObject, StaticJsValue } from "../interfaces/index.js";
import { StaticJsObjectPropertyDescriptor } from "../interfaces/StaticJsObject.js";

import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";

import StaticJsEnvUndefined from "./StaticJsEnvUndefined.js";

export default class StaticJsEnvObject implements StaticJsObject {
  private readonly _contents = new Map<
    string,
    StaticJsObjectPropertyDescriptor
  >();

  get [StaticJsTypeSymbol]() {
    return "object" as const;
  }

  get typeOf() {
    return "object" as const;
  }

  toJs() {
    const result: Record<string, unknown> = {};
    for (const [key, value] of this._contents) {
      result[key] = resolveDescriptorValue(value).toJs();
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
    return this._contents.has(name);
  }

  getProperty(name: string): StaticJsValue {
    const descriptor = this._contents.get(name);
    if (!descriptor) {
      return StaticJsEnvUndefined.Instance;
    }

    return resolveDescriptorValue(descriptor);
  }

  getIsReadOnlyProperty(name: string): boolean {
    return false;
  }

  getPropertyDescriptor(
    name: string,
  ): StaticJsObjectPropertyDescriptor | undefined {
    const descriptor = this._contents.get(name);
    if (descriptor) {
      return { ...descriptor };
    }

    return undefined;
  }

  defineProperty(
    name: string,
    descriptor: StaticJsObjectPropertyDescriptor,
  ): void {
    const existingDescriptor = this._contents.get(name);
    if (existingDescriptor && !existingDescriptor.configurable) {
      // TODO throw StaticJs TypeError
      throw new Error(`Cannot redefine property: ${name}`);
    }

    this._contents.set(name, { ...existingDescriptor, ...descriptor });
  }

  setProperty(name: string, value: StaticJsValue): void {
    let descriptor = this._contents.get(name);
    if (descriptor) {
      descriptor = {
        ...descriptor,
        value,
      };
    } else {
      descriptor = {
        configurable: true,
        enumerable: true,
        writable: true,
        value,
      };
    }

    this._contents.set(name, descriptor);
  }

  deleteProperty(name: string): boolean {
    const descriptor = this._contents.get(name);
    if (!descriptor || !descriptor.configurable) {
      return false;
    }

    this._contents.delete(name);
    return true;
  }

  getKeys(): string[] {
    return Array.from(this._contents.keys());
  }
}

function resolveDescriptorValue(
  descriptor: StaticJsObjectPropertyDescriptor,
): StaticJsValue {
  if (descriptor.get) {
    return descriptor.get();
  }

  if (descriptor.value) {
    return descriptor.value;
  }

  return StaticJsEnvUndefined.Instance;
}
