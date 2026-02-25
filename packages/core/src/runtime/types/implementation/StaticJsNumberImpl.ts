import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsNumber } from "../StaticJsNumber.js";
import StaticJsTypeCode from "../StaticJsTypeCode.js";

import StaticJsAbstractPrimitive from "./StaticJsAbstractPrimitive.js";

export default class StaticJsNumberImpl
  extends StaticJsAbstractPrimitive
  implements StaticJsNumber
{
  private readonly _value: number;

  constructor(realm: StaticJsRealm, value: number) {
    if (typeof value !== "number") {
      throw new TypeError(`StaticJsNumberImpl constructor expects a number, got ${typeof value}`);
    }

    super(realm);
    this._value = value;
  }

  get typeOf() {
    return "number" as const;
  }

  get runtimeTypeOf() {
    return "number" as const;
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.Number;
  }

  get value() {
    return this._value;
  }

  toJsSync() {
    return this._value;
  }

  toStringSync(): string {
    return String(this._value);
  }
}
