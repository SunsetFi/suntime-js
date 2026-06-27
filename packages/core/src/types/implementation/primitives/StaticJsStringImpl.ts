import type { StaticJsMarkable, StaticJsMarkableAllocator } from "#memory/StaticJsMarkable.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { StaticJsMemoryAllocationTag } from "#memory/StaticJsMemoryAllocationTag.js";

import type { StaticJsString } from "../../StaticJsString.js";

import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { StaticJsAbstractPrimitive } from "../StaticJsAbstractPrimitive.js";

export class StaticJsStringImpl extends StaticJsAbstractPrimitive implements StaticJsString {
  private readonly _value: string;

  constructor(realm: StaticJsRealm, value: string) {
    if (typeof value !== "string") {
      throw new TypeError(`Cannot convert ${value} to StaticJsString: Expected string.`);
    }

    super(realm, StaticJsMemoryAllocationTag.StaticJsString);
    realm.memory.allocate(StaticJsMemoryAllocationTag.RawStringCharacter, value.length);
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

  override mark(marks: Set<StaticJsMarkable>, allocate?: StaticJsMarkableAllocator): void {
    if (marks.has(this)) {
      return;
    }

    super.mark(marks, allocate);
    allocate?.(StaticJsMemoryAllocationTag.RawStringCharacter, this._value.length);
  }

  toNative() {
    return this._value;
  }

  toStringSync(): string {
    return String(this._value);
  }
}
