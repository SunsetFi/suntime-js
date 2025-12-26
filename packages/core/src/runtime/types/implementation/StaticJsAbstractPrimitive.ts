import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";
import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsPrimitive } from "../StaticJsPrimitive.js";
import type StaticJsTypeCode from "../StaticJsTypeCode.js";

export default abstract class StaticJsAbstractPrimitive
  implements StaticJsPrimitive
{
  private _refCount = 0;

  constructor(private readonly _realm: StaticJsRealm) {}

  get realm(): StaticJsRealm {
    return this._realm;
  }

  abstract get runtimeTypeOf(): string;

  abstract get typeOf(): string;

  abstract get runtimeTypeCode(): StaticJsTypeCode;

  get refCount(): number {
    return this._refCount;
  }

  ref(): void {
    this._refCount++;

    if (this._refCount === 1) {
      this._alloc();
    }
  }

  unref(): void {
    if (this._refCount === 0) {
      throw new StaticJsEngineError(
        "StaticJsAbstractPrimitive: Attempted to unref when refCount is already zero.",
      );
    }

    this._refCount--;

    if (this._refCount === 0) {
      this._unalloc();
    }
  }

  abstract toJsSync(): unknown;

  abstract toStringSync(): string;

  [Symbol.toStringTag](): string {
    return `StaticJsValue ${this.runtimeTypeOf} [${this.toStringSync()}]`;
  }

  protected _alloc() {}

  protected _unalloc() {}
}
