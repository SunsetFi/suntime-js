import type { StaticJsAllocation, StaticJsAllocator } from "#memory/StaticJsAllocation.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { allocated } from "#memory/allocated.js";
import { StaticJsMemoryAllocationTag } from "#memory/StaticJsMemoryAllocationTag.js";

import type { StaticJsUndefined } from "../../StaticJsUndefined.js";
import type { StaticJsAbstractPrimitiveCreateParams } from "../StaticJsAbstractPrimitive.js";

import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";

export type StaticJsUndefinedImplCreateParams = StaticJsAbstractPrimitiveCreateParams;

export class StaticJsUndefinedImpl implements StaticJsUndefined {
  static create(params: StaticJsUndefinedImplCreateParams): StaticJsUndefinedImpl {
    return allocated(new StaticJsUndefinedImpl(params.realm));
  }

  protected constructor(private readonly _realm: StaticJsRealm) {}

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

  mark(marks: Set<StaticJsAllocation>): void {
    if (marks.has(this)) {
      return;
    }

    marks.add(this);
  }

  allocateSelf(
    allocate: StaticJsAllocator = this.realm.memory.allocate.bind(this.realm.memory),
  ): void {
    allocate(StaticJsMemoryAllocationTag.StaticJsUndefined, this);
  }

  toNative() {
    return undefined;
  }

  toStringSync(): string {
    return "undefined";
  }
}
