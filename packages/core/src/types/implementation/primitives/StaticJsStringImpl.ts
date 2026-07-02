import type { StaticJsMarkable, StaticJsMarkableAllocator } from "#memory/StaticJsMarkable.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { StaticJsMemoryAllocationTag } from "#memory/StaticJsMemoryAllocationTag.js";

import type { StaticJsString } from "../../StaticJsString.js";

import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { StaticJsAbstractPrimitive } from "../StaticJsAbstractPrimitive.js";

export class StaticJsStringImpl extends StaticJsAbstractPrimitive implements StaticJsString {
  private readonly _value: string;

  constructor(realm: StaticJsRealm, value: string) {
    super(realm);
    if (typeof value !== "string") {
      throw new TypeError(`Cannot convert ${value} to StaticJsString: Expected string.`);
    }

    realm.memory.allocate(StaticJsMemoryAllocationTag.StaticJsString, this);
    realm.memory.allocate(StaticJsMemoryAllocationTag.RawString, value);
    this._value = value;
  }

  override get [Symbol.toStringTag](): string {
    return "StaticJsString";
  }

  get typeOf() {
    return "string" as const;
  }

  get runtimeTypeOf() {
    return "string" as const;
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.String;
  }

  get value() {
    return this._value;
  }

  mark(marks: Set<StaticJsMarkable>, allocate?: StaticJsMarkableAllocator): void {
    if (marks.has(this)) {
      return;
    }

    marks.add(this);
    allocate?.(StaticJsMemoryAllocationTag.RawString, this._value);
  }

  toNative() {
    return this._value;
  }

  toStringSync(): string {
    return String(this._value);
  }
}
