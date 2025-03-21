import { StaticJsObject, StaticJsValue } from "../interfaces/index.js";

import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";

import StaticJsEnvUndefined from "./StaticJsEnvUndefined.js";

export default class StaticJsEnvObject implements StaticJsObject {
  private readonly _contents = new Map<string, StaticJsValue>();

  get [StaticJsTypeSymbol]() {
    return "object" as const;
  }

  get typeOf() {
    return "object" as const;
  }

  toJs() {
    const result: Record<string, unknown> = {};
    for (const [key, value] of this._contents) {
      result[key] = value.toJs();
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
    return this._contents.get(name) ?? StaticJsEnvUndefined.Instance;
  }

  getIsReadOnlyProperty(name: string): boolean {
    return false;
  }

  setProperty(name: string, value: StaticJsValue): void {
    this._contents.set(name, value);
  }

  getKeys(): string[] {
    return Array.from(this._contents.keys());
  }
}
