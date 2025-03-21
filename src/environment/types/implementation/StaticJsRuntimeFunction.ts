import StaticJsEnvironment from "../../StaticJsEnvironment.js";
import StaticJsUndefined from "../factories/StaticJsUndefined.js";

import { StaticJsFunction, StaticJsValue } from "../interfaces/index.js";

import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
import toStaticJsValue from "../utils/to-static-js-value.js";

import StaticJsEnvNumber from "./StaticJsEnvNumber.js";
import StaticJsEnvString from "./StaticJsEnvString.js";
import StaticJsEnvUndefined from "./StaticJsEnvUndefined.js";

export default class StaticJsRuntimeFunction<
  TArgs extends StaticJsValue[] = StaticJsValue[],
> implements StaticJsFunction<TArgs>
{
  private readonly _name: StaticJsEnvString | null;

  constructor(
    name: string | null,
    private readonly _evaluate: (
      env: StaticJsEnvironment,
      ...args: TArgs
    ) => StaticJsValue,
  ) {
    this._name = name ? new StaticJsEnvString(name) : null;
  }

  get [StaticJsTypeSymbol]() {
    return "function" as const;
  }

  get typeOf() {
    return "function" as const;
  }

  toJs() {
    return (env: StaticJsEnvironment, ...args: any[]) => {
      if (env instanceof StaticJsEnvironment === false) {
        throw new Error(
          "The first argument of a ScriptJsFunction evaluation must be a StaticJsEnvironment instance.",
        );
      }

      const argValues = args.map(toStaticJsValue) as TArgs;
      const result = this._evaluate(env, ...argValues);
      return result.toJs();
    };
  }

  toString() {
    return `function ${this._name ? this._name.toJs() : ""}() { [native code] }`;
  }

  toNumber(): number {
    return Number.NaN;
  }

  toBoolean(): boolean {
    return true;
  }

  evaluate(env: StaticJsEnvironment, ...args: TArgs): StaticJsValue {
    return this._evaluate(env, ...args);
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
        return this._name ?? StaticJsUndefined();
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
