import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { STATICJS_PRIMITIVE_BYTES } from "#memory/implementation/measurements.js";

import type { StaticJsUndefined } from "../../StaticJsUndefined.js";

import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";

export class StaticJsUndefinedImpl implements StaticJsUndefined {
  constructor(private readonly _realm: StaticJsRealm) {
    _realm.memory.allocate(STATICJS_PRIMITIVE_BYTES);
  }

  get [Symbol.toStringTag](): string {
    return "StaticJsUndefined";
  }

  get realm() {
    return this._realm;
  }

  get typeOf() {
    return "undefined" as const;
  }

  get runtimeTypeOf() {
    return "undefined" as const;
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.Undefined;
  }

  get value() {
    return undefined;
  }

  toNative() {
    return undefined;
  }

  toStringSync(): string {
    return "undefined";
  }
}
