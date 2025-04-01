import type { StaticJsNumber } from "../interfaces/index.js";

export default class StaticJsNumberImpl implements StaticJsNumber {
  private readonly _value: number;

  public static readonly zero = new StaticJsNumberImpl(0);
  public static readonly Infinity = new StaticJsNumberImpl(Infinity);
  public static readonly NaN = new StaticJsNumberImpl(NaN);

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
