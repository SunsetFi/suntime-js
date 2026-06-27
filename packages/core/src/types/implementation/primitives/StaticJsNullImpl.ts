import type { StaticJsMarkable } from "#memory/StaticJsMarkable.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

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

  mark(marks: Set<StaticJsMarkable>, allocate?: (size: number) => void): void {
    if (marks.has(this)) {
      return;
    }
    marks.add(this);

    allocate?.(STATICJS_PRIMITIVE_BYTES);
  }

  toNative() {
    return null;
  }

  toStringSync() {
    return "null";
  }
}
