import type { StaticJsMarkable, StaticJsMarkableAllocator } from "#memory/StaticJsMarkable.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { StaticJsMemoryAllocationTag } from "#memory/StaticJsMemoryAllocationTag.js";

import type { StaticJsNull } from "../../StaticJsNull.js";

import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";

export class StaticJsNullImpl implements StaticJsNull {
  constructor(private readonly _realm: StaticJsRealm) {
    _realm.memory.allocate(StaticJsMemoryAllocationTag.StaticJsNull, this);
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

  mark(marks: Set<StaticJsMarkable>, allocate?: StaticJsMarkableAllocator): void {
    if (marks.has(this)) {
      return;
    }

    marks.add(this);

    allocate?.(StaticJsMemoryAllocationTag.StaticJsNull, this);
  }

  toNative() {
    return null;
  }

  toStringSync() {
    return "null";
  }
}
