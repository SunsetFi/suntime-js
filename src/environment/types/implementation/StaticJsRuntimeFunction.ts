import { StaticJsFunction, StaticJsValue } from "../interfaces/index.js";

import StaticJsTypeofSymbol from "../StaticJsTypeofSymbol.js";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";

import StaticJsEnvNumber from "./StaticJsEnvNumber.js";
import StaticJsEnvString from "./StaticJsEnvString.js";
import StaticJsEnvUndefined from "./StaticJsEnvUndefined.js";

export default class StaticJsRuntimeFunction<
  TArgs extends StaticJsValue[] = StaticJsValue[],
> implements StaticJsFunction<TArgs>
{
  private readonly _name: StaticJsEnvString;
  constructor(
    name: string,
    private readonly _evaluate: (...args: TArgs) => StaticJsValue,
  ) {
    this._name = new StaticJsEnvString(name);
  }

  get [StaticJsTypeSymbol]() {
    return "function" as const;
  }

  get [StaticJsTypeofSymbol]() {
    return "function" as const;
  }

  toString() {
    return `function ${this._name}() { [native code] }`;
  }

  toJs() {
    throw new Error("Cannot convert a runtime function to JS.");
  }

  evaluate(...args: TArgs): StaticJsValue {
    return this._evaluate(...args);
  }

  hasProperty(name: string): boolean {
    switch (name) {
      case "name":
      case "length":
        return true;
      default:
        return false;
    }
  }

  getProperty(name: string): StaticJsValue {
    switch (name) {
      case "name":
        return this._name;
      case "length":
        return new StaticJsEnvNumber(this._evaluate.length);
      default:
        return StaticJsEnvUndefined.Instance;
    }
  }

  getIsReadOnlyProperty(name: string): boolean {
    return true;
  }

  setProperty(name: string, value: StaticJsValue): void {
    throw new Error("Functions are read-only.");
  }

  getKeys(): string[] {
    return ["name", "length"];
  }
}
