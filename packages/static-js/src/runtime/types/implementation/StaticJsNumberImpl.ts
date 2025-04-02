import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";

import { StaticJsNumber } from "../interfaces/StaticJsNumber.js";
import { StaticJsObject } from "../interfaces/StaticJsObject.js";

import StaticJsAbstractPrimitive from "./StaticJsAbstractPrimitive.js";
import StaticJsNumberBoxed from "./StaticJsNumberBoxed.js";

export default class StaticJsNumberImpl
  extends StaticJsAbstractPrimitive
  implements StaticJsNumber
{
  private readonly _value: number;

  constructor(realm: StaticJsRealm, value: number) {
    super(realm);
    this._value = value;
  }

  get runtimeTypeOf() {
    return "number" as const;
  }

  get typeOf() {
    return "number" as const;
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
    return this._value;
  }

  toBoolean(): boolean {
    return Boolean(this._value);
  }

  toObject(): StaticJsObject {
    return new StaticJsNumberBoxed(this.realm, this._value);
  }
}
