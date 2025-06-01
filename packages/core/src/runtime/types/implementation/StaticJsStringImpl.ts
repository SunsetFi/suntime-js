import { StaticJsRealm } from "../../realm/interfaces/StaticJsRealm.js";

import { StaticJsObject } from "../interfaces/StaticJsObject.js";
import { StaticJsString } from "../interfaces/StaticJsString.js";

import StaticJsAbstractPrimitive from "./StaticJsAbstractPrimitive.js";
import StaticJsStringBoxed from "./StaticJsStringBoxed.js";

export default class StaticJsStringImpl
  extends StaticJsAbstractPrimitive
  implements StaticJsString
{
  private readonly _value: string;

  constructor(realm: StaticJsRealm, value: string) {
    if (typeof value !== "string") {
      throw new TypeError(
        `Cannot convert ${value} to StaticJsString: Expected string.`,
      );
    }

    super(realm);
    this._value = value;
  }

  get typeOf() {
    return "boolean" as const;
  }

  get runtimeTypeOf() {
    return "string" as const;
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

  toObject(): StaticJsObject {
    return new StaticJsStringBoxed(this.realm, this._value);
  }
}
