import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsString } from "../StaticJsString.js";

import StaticJsAbstractPrimitive from "./StaticJsAbstractPrimitive.js";

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

  toJsSync() {
    return this._value;
  }

  toStringSync(): string {
    return String(this._value);
  }
}
