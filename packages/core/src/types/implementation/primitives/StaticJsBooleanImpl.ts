import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { STATICJS_PRIMITIVE_BYTES } from "#memory/implementation/measurements.js";

import type { StaticJsBoolean } from "../../StaticJsBoolean.js";

import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { StaticJsAbstractPrimitive } from "../StaticJsAbstractPrimitive.js";

export class StaticJsBooleanImpl extends StaticJsAbstractPrimitive implements StaticJsBoolean {
  private readonly _value: boolean;

  constructor(realm: StaticJsRealm, value: boolean) {
    super(realm, STATICJS_PRIMITIVE_BYTES);
    this._value = value;
  }

  override get [Symbol.toStringTag](): string {
    return "StaticJsBoolean";
  }

  get runtimeTypeOf() {
    return "boolean" as const;
  }

  get typeOf() {
    return "boolean" as const;
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.Boolean;
  }

  get value() {
    return this._value;
  }

  toNative() {
    return this._value;
  }

  toStringSync(): string {
    return String(this._value);
  }

  negate(): StaticJsBoolean {
    if (this._value) {
      return this.realm.types.false;
    }

    return this.realm.types.true;
  }
}
