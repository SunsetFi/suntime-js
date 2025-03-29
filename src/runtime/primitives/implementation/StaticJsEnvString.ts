import { StaticJsString as IStaticJsString } from "../interfaces/index.js";

import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";

export default class StaticJsEnvString implements IStaticJsString {
  private readonly _value: string;

  constructor(value: string) {
    this._value = value;
  }

  get [StaticJsTypeSymbol]() {
    return "string" as const;
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
    return Boolean(this._value);
  }
}
