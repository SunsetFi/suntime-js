import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { symbolInspect } from "#utils/symbol-inspect.js";

import type { StaticJsPrimitive } from "../StaticJsPrimitive.js";
import type { StaticJsTypeCode } from "../StaticJsTypeCode.js";

export abstract class StaticJsAbstractPrimitive implements StaticJsPrimitive {
  constructor(
    private readonly _realm: StaticJsRealm,
    private readonly _size: number,
  ) {
    _realm.memory.allocate(_size);
  }

  get realm(): StaticJsRealm {
    return this._realm;
  }

  abstract get typeOf(): string;

  abstract get runtimeTypeOf(): string;

  abstract get runtimeTypeCode(): StaticJsTypeCode;

  mark(marks: Set<StaticJsValue>, allocate: boolean = false): void {
    // This could technically be a subclass that doesn't fit our union,
    // but this is only used for marking, so we can safely cast it to StaticJsValue.
    if (marks.has(this as unknown as StaticJsValue)) {
      return;
    }
    marks.add(this as unknown as StaticJsValue);

    if (allocate) {
      this.realm.memory.allocate(this._size);
    }
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
