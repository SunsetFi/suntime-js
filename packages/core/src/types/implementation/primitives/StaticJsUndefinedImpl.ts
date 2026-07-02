import type { StaticJsMarkable, StaticJsMarkableAllocator } from "#memory/StaticJsMarkable.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { StaticJsMemoryAllocationTag } from "#memory/StaticJsMemoryAllocationTag.js";

import type { StaticJsUndefined } from "../../StaticJsUndefined.js";

import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";

export class StaticJsUndefinedImpl implements StaticJsUndefined {
  constructor(private readonly _realm: StaticJsRealm) {
    _realm.memory.allocate(StaticJsMemoryAllocationTag.StaticJsUndefined, this);
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

  mark(marks: Set<StaticJsMarkable>, allocate?: StaticJsMarkableAllocator): void {
    if (marks.has(this)) {
      return;
    }

    marks.add(this);

    allocate?.(StaticJsMemoryAllocationTag.StaticJsUndefined, this);
  }

  toNative() {
    return undefined;
  }

  toStringSync(): string {
    return "undefined";
  }
}
