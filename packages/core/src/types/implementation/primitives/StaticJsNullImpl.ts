import type { StaticJsAllocation, StaticJsAllocator } from "#memory/StaticJsAllocation.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { allocated } from "#memory/allocated.js";
import { StaticJsMemoryAllocationTag } from "#memory/StaticJsMemoryAllocationTag.js";

import type { StaticJsNull } from "../../StaticJsNull.js";

import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";

export class StaticJsNullImpl implements StaticJsNull {
  static create(realm: StaticJsRealm): StaticJsNullImpl {
    return allocated(new StaticJsNullImpl(realm));
  }

  protected constructor(private readonly _realm: StaticJsRealm) {}

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

  mark(marks: Set<StaticJsAllocation>): void {
    if (marks.has(this)) {
      return;
    }

    marks.add(this);
  }

  allocateSelf(
    allocate: StaticJsAllocator = this.realm.memory.allocate.bind(this.realm.memory),
  ): void {
    allocate(StaticJsMemoryAllocationTag.StaticJsNull, this);
  }

  toNative() {
    return null;
  }

  toStringSync() {
    return "null";
  }
}
