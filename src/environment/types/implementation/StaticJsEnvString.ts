import { StaticJsString, StaticJsValue } from "../interfaces/index.js";

import StaticJsTypeofSymbol from "../StaticJsTypeofSymbol.js";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";

import StaticJsRuntimeFunction from "./StaticJsRuntimeFunction.js";
import StaticJsEnvNumber from "./StaticJsEnvNumber.js";
import StaticJsEnvUndefined from "./StaticJsEnvUndefined.js";

export default class StaticJsEnvString implements StaticJsString {
  private readonly _value: string;

  constructor(value: string) {
    this._value = value;
  }

  get [StaticJsTypeSymbol]() {
    return "string" as const;
  }

  get [StaticJsTypeofSymbol]() {
    return "string" as const;
  }

  toString(): string {
    return this._value;
  }

  toJs() {
    return this._value;
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
    // Might want to cache or lazy evaluate these, once we start caring about performance.
    switch (name) {
      case "length":
        return new StaticJsEnvNumber(this._value.length);
      case "concat":
        return new StaticJsRuntimeFunction("concat", (...values) => {
          return new StaticJsEnvString(
            this._value + values.map((value) => value.toString()).join(""),
          );
        });
      default:
        const index = parseIndex(name);
        if (index !== null && index >= 0 && index < this._value.length) {
          return new StaticJsEnvString(this._value[index]);
        }
        return StaticJsEnvUndefined.Instance;
    }
  }

  getIsReadOnlyProperty(name: string): boolean {
    throw new Error("Method not implemented.");
  }

  setProperty(name: string, value: StaticJsValue): void {
    throw new Error("Method not implemented.");
  }

  getKeys(): string[] {
    throw new Error("Method not implemented.");
  }
}

function parseIndex(index: string): number | null {
  const parsedIndex = parseInt(index, 10);
  if (isNaN(parsedIndex)) {
    return null;
  }

  return parsedIndex;
}
