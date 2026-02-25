import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsPrimitive } from "../StaticJsPrimitive.js";
import type StaticJsTypeCode from "../StaticJsTypeCode.js";

export default abstract class StaticJsAbstractPrimitive implements StaticJsPrimitive {
  constructor(private readonly _realm: StaticJsRealm) {}

  get realm(): StaticJsRealm {
    return this._realm;
  }

  abstract get runtimeTypeOf(): string;

  abstract get typeOf(): string;

  abstract get runtimeTypeCode(): StaticJsTypeCode;

  abstract toJsSync(): unknown;

  abstract toStringSync(): string;

  [Symbol.toStringTag](): string {
    return `StaticJsValue ${this.runtimeTypeOf} [${this.toStringSync()}]`;
  }
}
