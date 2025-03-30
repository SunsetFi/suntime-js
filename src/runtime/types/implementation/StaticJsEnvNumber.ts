import type { StaticJsNumber as IStaticJsNumber } from "../interfaces/index.js";

export default class StaticJsEnvNumber implements IStaticJsNumber {
  private readonly _value: number;

  constructor(value: number) {
    this._value = value;
  }

  get typeOf() {
    return "number" as const;
  }

  get runtimeTypeOf() {
    return "number";
  }

  toJs() {
    return this._value;
  }

  toString(): string {
    return String(this._value);
  }

  toNumber(): number {
    return this._value;
  }

  toBoolean(): boolean {
    return Boolean(this._value);
  }

  get value() {
    return this._value;
  }
}
