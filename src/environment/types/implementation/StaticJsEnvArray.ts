import {
  StaticJsObject,
  assertStaticJsValue,
  StaticJsValue,
} from "../interfaces/index.js";

import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";

import StaticJsEnvNumber from "./StaticJsEnvNumber.js";
import StaticJsEnvUndefined from "./StaticJsEnvUndefined.js";

export default class StaticJsArray implements StaticJsObject<"array"> {
  private _items: StaticJsValue[] = [];

  constructor(items: StaticJsValue[] = []) {
    this._items = [...items];
  }

  get [StaticJsTypeSymbol]() {
    return "array" as const;
  }

  get typeOf() {
    return "object" as const;
  }

  get length(): number {
    return this._items.length;
  }

  toJs() {
    return this._items.map((value) => value.toJs());
  }

  toString() {
    return this._items.map((value) => value.toString()).join(",");
  }

  toNumber() {
    // Yes, really.
    if (this._items.length === 0) {
      return 0;
    }

    // Yes, really really.
    if (this._items.length === 1) {
      return this._items[0].toNumber();
    }

    // Yes, really really really
    return Number.NaN;
  }

  toBoolean(): boolean {
    return true;
  }

  get [Symbol.toStringTag]() {
    return `Array [${this._items.map((value) => value.toString()).join(", ")}]`;
  }

  hasProperty(name: string): boolean {
    switch (name) {
      case "length":
        return true;
      default:
        const index = parseIndex(name);
        if (index === null) {
          return false;
        }

        return index >= 0 && index < this._items.length;
    }
  }

  getProperty(name: string): StaticJsValue {
    switch (name) {
      case "length":
        return new StaticJsEnvNumber(this._items.length);
      default:
        const index = parseIndex(name);
        if (index === null || index < 0 || index >= this._items.length) {
          return StaticJsEnvUndefined.Instance;
        }

        return this._items[index];
    }
  }

  getIsReadOnlyProperty(name: string): boolean {
    switch (name) {
      case "length":
        return true;
      default:
        const index = parseIndex(name);
        if (index === null) {
          return true;
        }
        return false;
    }
  }

  setProperty(name: string, value: StaticJsValue): void {
    assertStaticJsValue(value);
    switch (name) {
      case "length":
        // You can actually do this in javascript...
        throw new Error("Cannot set length of array");
      default:
        const index = parseIndex(name);
        if (index === null) {
          throw new Error("Invalid index");
        }

        this._items[index] = value;
    }
  }

  getKeys(): string[] {
    return this._items.map((_, index) => index.toString());
  }

  get(index: number): StaticJsValue {
    if (index < 0 || index >= this._items.length) {
      return StaticJsEnvUndefined.Instance;
    }

    return this._items[index];
  }

  set(index: number, value: StaticJsValue): void {
    this._items[index] = value;
  }

  sliceNative(start?: number, end?: number): StaticJsValue[] {
    return this._items.slice(start, end);
  }
}

function parseIndex(index: string): number | null {
  const parsedIndex = parseInt(index, 10);
  if (isNaN(parsedIndex)) {
    return null;
  }

  return parsedIndex;
}
