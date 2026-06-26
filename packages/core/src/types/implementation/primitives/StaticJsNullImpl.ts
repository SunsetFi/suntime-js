import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { STATICJS_PRIMITIVE_BYTES } from "#memory/implementation/measurements.js";

import type { StaticJsNull } from "../../StaticJsNull.js";

import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";

export class StaticJsNullImpl implements StaticJsNull {
  constructor(private readonly _realm: StaticJsRealm) {
    _realm.memory.allocate(STATICJS_PRIMITIVE_BYTES);
  }

  [Symbol.toStringTag](): string {
    return "StaticJsNull";
  }

  get realm() {
    return this._realm;
  }

  get typeOf() {
    // Javascript is truly a wonder to behold.
    return "object" as const;
  }

  get runtimeTypeOf() {
    return "null" as const;
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.Null;
  }

  get value() {
    return null;
  }

  mark(marks: Set<StaticJsValue>, allocate: boolean = false): void {
    if (marks.has(this)) {
      return;
    }
    marks.add(this);

    if (allocate) {
      this.realm.memory.allocate(STATICJS_PRIMITIVE_BYTES);
    }
  }

  toNative() {
    return null;
  }

  toStringSync() {
    return "null";
  }
}
