import type { StaticJsAllocation, StaticJsAllocator } from "#memory/StaticJsAllocation.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { StaticJsMemoryAllocationTag } from "#memory/StaticJsMemoryAllocationTag.js";

import type { StaticJsBoolean } from "../../StaticJsBoolean.js";

import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { StaticJsAbstractPrimitive } from "../StaticJsAbstractPrimitive.js";

export class StaticJsBooleanImpl extends StaticJsAbstractPrimitive implements StaticJsBoolean {
  private readonly _value: boolean;

  constructor(realm: StaticJsRealm, value: boolean) {
    super(realm);
    realm.memory.allocate(StaticJsMemoryAllocationTag.StaticJsBoolean, this);
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

  mark(marks: Set<StaticJsAllocation>): void {
    if (marks.has(this)) {
      return;
    }

    marks.add(this);
  }

  allocateSelf(
    allocate: StaticJsAllocator = this.realm.memory.allocate.bind(this.realm.memory),
  ): void {
    allocate(StaticJsMemoryAllocationTag.StaticJsBoolean, this);
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
