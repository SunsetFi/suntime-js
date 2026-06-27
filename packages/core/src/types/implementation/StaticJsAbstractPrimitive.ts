import type { StaticJsMarkable, StaticJsMarkableAllocator } from "#memory/StaticJsMarkable.js";
import type { StaticJsMemoryAllocationTag } from "#memory/StaticJsMemoryAllocationTag.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { symbolInspect } from "#utils/symbol-inspect.js";

import type { StaticJsPrimitive } from "../StaticJsPrimitive.js";
import type { StaticJsTypeCode } from "../StaticJsTypeCode.js";

export abstract class StaticJsAbstractPrimitive implements StaticJsPrimitive {
  constructor(
    private readonly _realm: StaticJsRealm,
    private readonly _memoryTag: StaticJsMemoryAllocationTag,
  ) {
    _realm.memory.allocate(_memoryTag);
  }

  get realm(): StaticJsRealm {
    return this._realm;
  }

  abstract get typeOf(): string;

  abstract get runtimeTypeOf(): string;

  abstract get runtimeTypeCode(): StaticJsTypeCode;

  mark(marks: Set<StaticJsMarkable>, allocate?: StaticJsMarkableAllocator): void {
    // This could technically be a subclass that doesn't fit our union,
    // but this is only used for marking, so we can safely cast it to StaticJsMarkable.
    if (marks.has(this as unknown as StaticJsMarkable)) {
      return;
    }
    marks.add(this as unknown as StaticJsMarkable);

    allocate?.(this._memoryTag);
  }

  abstract toNative(): unknown;

  abstract toStringSync(): string;

  get [Symbol.toStringTag](): string {
    return `StaticJsValue`;
  }

  [symbolInspect](): string {
    return `StaticJsValue ${this.runtimeTypeOf} [${this.toStringSync()}]`;
  }
}
