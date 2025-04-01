import { StaticJsBoolean } from "../interfaces/index.js";

export default class StaticJsBooleanImpl implements StaticJsBoolean {
  private readonly _value: boolean;

  public static readonly true = new StaticJsBooleanImpl(true);
  public static readonly false = new StaticJsBooleanImpl(false);

  constructor(value: boolean) {
    this._value = value;
  }

  get runtimeTypeOf() {
    return "boolean";
  }

  get typeOf() {
    return "boolean" as const;
  }

  get value() {
    return this._value;
  }

  toJs() {
    return this._value;
  }

  toString(): string {
    return String(this._value);
  }

  toNumber(): number {
    return Number(this._value);
  }

  toBoolean(): boolean {
    return this._value;
  }

  negate(): StaticJsBoolean {
    if (this._value) {
      return StaticJsBooleanImpl.false;
    }

    return StaticJsBooleanImpl.true;
  }
}
