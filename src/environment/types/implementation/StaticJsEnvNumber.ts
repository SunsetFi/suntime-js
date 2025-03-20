import { StaticJsNumber as IStaticJsNumber } from "../interfaces/index.js";

import StaticJsTypeofSymbol from "../StaticJsTypeofSymbol.js";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";

export default class StaticJsEnvNumber implements IStaticJsNumber {
  private readonly _value: number;

  constructor(value: number) {
    this._value = value;
  }

  get [StaticJsTypeSymbol]() {
    return "number" as const;
  }

  get [StaticJsTypeofSymbol]() {
    return "number" as const;
  }

  toString(): string {
    return String(this._value);
  }

  toJs() {
    return this._value;
  }

  get value() {
    return this._value;
  }
}
