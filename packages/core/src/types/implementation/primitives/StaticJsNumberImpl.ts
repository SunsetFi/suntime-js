import type { StaticJsAllocation, StaticJsAllocator } from "#memory/StaticJsAllocation.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { allocated } from "#memory/allocated.js";
import { StaticJsMemoryAllocationTag } from "#memory/StaticJsMemoryAllocationTag.js";

import type { StaticJsNumber } from "../../StaticJsNumber.js";

import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import {
  StaticJsAbstractPrimitive,
  type StaticJsAbstractPrimitiveCreateParams,
} from "../StaticJsAbstractPrimitive.js";

export interface StaticJsNumberImplCreateParams extends StaticJsAbstractPrimitiveCreateParams {
  value: number;
}

export class StaticJsNumberImpl extends StaticJsAbstractPrimitive implements StaticJsNumber {
  private readonly _value: number;

  static create(params: StaticJsNumberImplCreateParams): StaticJsNumberImpl {
    return allocated(new StaticJsNumberImpl(params.realm, params.value));
  }

  protected constructor(realm: StaticJsRealm, value: number) {
    if (typeof value !== "number") {
      throw new TypeError(`StaticJsNumberImpl constructor expects a number, got ${typeof value}`);
    }

    super(realm);
    this._value = value;
  }

  override get [Symbol.toStringTag](): string {
    return "StaticJsNumber";
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

  mark(marks: Set<StaticJsAllocation>): void {
    if (marks.has(this)) {
      return;
    }

    marks.add(this);
  }

  allocateSelf(
    allocate: StaticJsAllocator = this.realm.memory.allocate.bind(this.realm.memory),
  ): void {
    allocate(StaticJsMemoryAllocationTag.StaticJsNumber, this);
    allocate(StaticJsMemoryAllocationTag.RawNumber, this._value);
  }

  toNative() {
    return this._value;
  }

  toStringSync(): string {
    return String(this._value);
  }
}
