import { StaticJsString } from "../interfaces/index.js";

export default class StaticJsStringImpl implements StaticJsString {
  private readonly _value: string;

  constructor(value: string) {
    this._value = value;
  }

  get typeOf() {
    return "boolean" as const;
  }

  get runtimeTypeOf() {
    return "string";
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
    return Boolean(this._value);
  }
}
