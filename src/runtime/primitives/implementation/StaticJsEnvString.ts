import {
  StaticJsString,
  StaticJsValue,
  StaticJsObjectPropertyDescriptor,
} from "../interfaces/index.js";

import StaticJsTypeSymbol, {
  staticJsInstanceOf,
} from "../StaticJsTypeSymbol.js";

import StaticJsExternalFunction from "./StaticJsExternalFunction.js";
import StaticJsEnvNumber from "./StaticJsEnvNumber.js";
import StaticJsEnvUndefined from "./StaticJsEnvUndefined.js";

const ConcatFunc = new StaticJsExternalFunction(
  "concat",
  (thisArg, ...values) => {
    if (staticJsInstanceOf(thisArg) !== "string") {
      throw new Error(
        "String.prototype.concat called with non-string thisArg.",
      );
    }

    return new StaticJsEnvString(
      thisArg.toString() + values.map((value) => value.toString()).join(""),
    );
  },
);

export default class StaticJsEnvString implements StaticJsString {
  private readonly _value: string;

  constructor(value: string) {
    this._value = value;
  }

  get [StaticJsTypeSymbol]() {
    return "string" as const;
  }

  get typeOf() {
    return "string" as const;
  }

  toJs() {
    return this._value;
  }

  toString(): string {
    return this._value;
  }

  toNumber(): number {
    return Number(this._value);
  }

  toBoolean(): boolean {
    return Boolean(this._value);
  }

  hasProperty(name: string): boolean {
    switch (name) {
      case "length":
      case "concat":
        return true;
      default:
        const index = parseIndex(name);
        if (index !== null && index < 0 && index >= this._value.length) {
          return true;
        }
        return false;
    }
  }

  getProperty(name: string): StaticJsValue {
    switch (name) {
      case "length":
        return new StaticJsEnvNumber(this._value.length);
      case "concat":
        return ConcatFunc;
      default:
        const index = parseIndex(name);
        if (index !== null && index >= 0 && index < this._value.length) {
          return new StaticJsEnvString(this._value[index]);
        }
        return StaticJsEnvUndefined.Instance;
    }
  }

  getPropertyDescriptor(
    name: string,
  ): StaticJsObjectPropertyDescriptor | undefined {
    switch (name) {
      case "length":
        return {
          value: new StaticJsEnvNumber(this._value.length),
          writable: false,
          enumerable: false,
          configurable: false,
        };
      case "concat":
        return {
          value: ConcatFunc,
          writable: false,
          enumerable: false,
          configurable: false,
        };
      default:
        const index = parseIndex(name);
        if (index !== null && index >= 0 && index < this._value.length) {
          return {
            value: new StaticJsEnvString(this._value[index]),
            writable: false,
            enumerable: false,
            configurable: false,
          };
        }
        return undefined;
    }
  }

  defineProperty(
    name: string,
    descriptor: StaticJsObjectPropertyDescriptor,
  ): void {
    throw new Error("Cannot set properties of strings.");
  }

  getIsReadOnlyProperty(name: string): boolean {
    return true;
  }

  setProperty(name: string, value: StaticJsValue): void {
    // This is probably wrong.  We can probably truncate by changing the length.
    throw new Error("Cannot set properties of strings.");
  }

  deleteProperty(name: string): boolean {
    return false;
  }

  enumerateKeys(): string[] {
    // In practice, this is an array of stringified numbers for how many characters are in the string.
    return Object.keys(this._value);
  }
}

function parseIndex(index: string): number | null {
  const parsedIndex = parseInt(index, 10);
  if (isNaN(parsedIndex)) {
    return null;
  }

  return parsedIndex;
}
