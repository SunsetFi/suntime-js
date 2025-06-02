import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsNumber } from "../StaticJsNumber.js";
import type { StaticJsObject } from "../StaticJsObject.js";

import StaticJsAbstractPrimitive from "./StaticJsAbstractPrimitive.js";
import StaticJsNumberBoxed from "./StaticJsNumberBoxed.js";

export default class StaticJsNumberImpl
  extends StaticJsAbstractPrimitive
  implements StaticJsNumber
{
  private readonly _value: number;

  constructor(realm: StaticJsRealm, value: number) {
    if (typeof value !== "number") {
      throw new TypeError(
        `StaticJsNumberImpl constructor expects a number, got ${typeof value}`,
      );
    }

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

  toObject(): StaticJsObject {
    return new StaticJsNumberBoxed(this.realm, this._value);
  }
}
