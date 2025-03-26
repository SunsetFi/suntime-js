import hasOwnProperty from "../../../internal/has-own-property.js";
import {
  StaticJsObject,
  assertStaticJsValue,
  StaticJsValue,
  isStaticJsValue,
  StaticJsEmptyArrayItem,
  StaticJsArrayItem,
} from "../interfaces/index.js";
import { StaticJsObjectPropertyDescriptor } from "../interfaces/StaticJsObject.js";

import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";

import StaticJsEnvNumber from "./StaticJsEnvNumber.js";
import StaticJsEnvUndefined from "./StaticJsEnvUndefined.js";

export default class StaticJsEnvArray implements StaticJsObject<"array"> {
  private _items: StaticJsArrayItem[] = [];

  constructor(items: StaticJsArrayItem[] = []) {
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
    const array = this._items.map((value) =>
      isStaticJsValue(value) ? value.toJs() : value,
    );
    for (let i = 0; i < array.length; i++) {
      if (array[i] === StaticJsEmptyArrayItem) {
        delete array[i];
      }
    }
    return array;
  }

  toString() {
    return this._items
      .filter((x) => x !== StaticJsEmptyArrayItem)
      .map((value) => (isStaticJsValue(value) ? value.toString() : ""))
      .join(",");
  }

  toNumber() {
    // Yes, really.
    if (this._items.length === 0) {
      return 0;
    }

    // Yes, really really.
    if (this._items.length === 1) {
      const item = this._items[0];
      if (item === StaticJsEmptyArrayItem) {
        return 0;
      }

      return item.toNumber();
    }

    // Yes, really really really
    return Number.NaN;
  }

  toBoolean(): boolean {
    return true;
  }

  hasProperty(name: string): boolean {
    switch (name) {
      case "length":
        return true;
      default: {
        const index = parseIndex(name);
        if (index === null) {
          return false;
        }

        return index >= 0 && index < this._items.length;
      }
    }
  }

  getProperty(name: string): StaticJsValue {
    switch (name) {
      case "length":
        return new StaticJsEnvNumber(this._items.length);
      default: {
        const index = parseIndex(name);
        if (index === null || index < 0 || index >= this._items.length) {
          return StaticJsEnvUndefined.Instance;
        }

        const item = this._items[index];
        if (item === StaticJsEmptyArrayItem) {
          return StaticJsEnvUndefined.Instance;
        }

        return item;
      }
    }
  }

  getPropertyDescriptor(
    name: string,
  ): StaticJsObjectPropertyDescriptor | undefined {
    switch (name) {
      case "length":
        return {
          configurable: false,
          enumerable: false,
          // TODO: In real arrays, this is writable.
          // There is some weirdness about that, like items coming back if you expand the length again.
          writable: false,
          value: new StaticJsEnvNumber(this._items.length),
        };
    }

    const index = parseIndex(name);
    if (index != null && index >= 0 && index < this._items.length) {
      const value = this._items[index];
      if (value === StaticJsEmptyArrayItem) {
        return undefined;
      }

      return {
        configurable: false,
        enumerable: true,
        writable: true,
        value,
      };
    }

    return undefined;
  }

  defineProperty(
    name: string,
    descriptor: StaticJsObjectPropertyDescriptor,
  ): void {
    const index = parseIndex(name);
    if (index == null || index < 0 || index >= this._items.length) {
      throw new Error(`Cannot set property descriptor for ${name}`);
    }

    if (
      descriptor.configurable ||
      descriptor.enumerable ||
      descriptor.writable
    ) {
      // This is probably wrong for real arrays.
      throw new Error(
        "Cannot set configurable, enumerable, or writable on array",
      );
    }

    if (hasOwnProperty(descriptor, "get")) {
      throw new Error("Cannot set getter on array item");
    }

    if (hasOwnProperty(descriptor, "set")) {
      throw new Error("Cannot set setter on array item");
    }

    if (hasOwnProperty(descriptor, "value")) {
      const value = descriptor.value;
      // Another probably-unnecessary check.
      if (!isStaticJsValue(value)) {
        throw new Error("Property descriptor value must be a StaticJsValue");
      }

      this._items[index] = value;
    }
  }

  getIsReadOnlyProperty(name: string): boolean {
    switch (name) {
      case "length":
        return true;
      default: {
        const index = parseIndex(name);
        if (index === null) {
          return true;
        }
        return false;
      }
    }
  }

  setProperty(name: string, value: StaticJsValue): void {
    assertStaticJsValue(value);
    switch (name) {
      case "length":
        // You can actually do this in javascript...
        throw new Error("Cannot set length of array");
      default: {
        const index = parseIndex(name);
        if (index === null) {
          throw new Error("Invalid index");
        }

        this._items[index] = value;
      }
    }
  }

  deleteProperty(name: string): boolean {
    const index = parseIndex(name);
    if (index && index >= 0 && index < this._items.length) {
      this._items[index] = StaticJsEmptyArrayItem;
      return true;
    }

    return false;
  }

  enumerateKeys(): string[] {
    return this._items.map((_, index) => index.toString());
  }

  get(index: number): StaticJsValue {
    if (index < 0 || index >= this._items.length) {
      return StaticJsEnvUndefined.Instance;
    }

    const item = this._items[index];
    if (item === StaticJsEmptyArrayItem) {
      return StaticJsEnvUndefined.Instance;
    }

    return item;
  }

  set(index: number, value: StaticJsValue): void {
    this._items[index] = value;
  }

  sliceNative(start?: number, end?: number): StaticJsArrayItem[] {
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
