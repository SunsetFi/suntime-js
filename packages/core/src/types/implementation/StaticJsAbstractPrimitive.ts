import type { StaticJsAllocation, StaticJsAllocator } from "#memory/StaticJsAllocation.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { symbolInspect } from "#utils/symbol-inspect.js";

import type { StaticJsPrimitive } from "../StaticJsPrimitive.js";
import type { StaticJsTypeCode } from "../StaticJsTypeCode.js";

export abstract class StaticJsAbstractPrimitive implements StaticJsPrimitive {
  constructor(private readonly _realm: StaticJsRealm) {}

  get realm(): StaticJsRealm {
    return this._realm;
  }

  abstract get typeOf(): string;

  abstract get runtimeTypeOf(): string;

  abstract get runtimeTypeCode(): StaticJsTypeCode;

  abstract mark(marks: Set<StaticJsAllocation>): void;

  abstract allocateSelf(allocate?: StaticJsAllocator): void;

  abstract toNative(): unknown;

  abstract toStringSync(): string;

  get [Symbol.toStringTag](): string {
    return `StaticJsValue`;
  }

  [symbolInspect](): string {
    return `StaticJsValue ${this.runtimeTypeOf} [${this.toStringSync()}]`;
  }
}
