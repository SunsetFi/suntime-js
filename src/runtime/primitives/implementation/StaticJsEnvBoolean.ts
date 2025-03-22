import { StaticJsBoolean as IStaticJsBoolean } from "../interfaces/index.js";

import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";

export default class StaticJsEnvBoolean implements IStaticJsBoolean {
  private readonly _value: boolean;

  constructor(value: boolean) {
    this._value = value;
  }

  get [StaticJsTypeSymbol]() {
    return "boolean" as const;
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

  negate(): IStaticJsBoolean {
    return new StaticJsEnvBoolean(!this._value);
  }
}
