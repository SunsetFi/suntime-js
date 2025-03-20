import { StaticJsBoolean as IStaticJsBoolean } from "../interfaces/index.js";

import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
import StaticJsTypeofSymbol from "../StaticJsTypeofSymbol.js";

export default class StaticJsEnvBoolean implements IStaticJsBoolean {
  private readonly _value: boolean;

  constructor(value: boolean) {
    this._value = value;
  }

  get [StaticJsTypeSymbol]() {
    return "boolean" as const;
  }

  get [StaticJsTypeofSymbol]() {
    return "boolean" as const;
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
