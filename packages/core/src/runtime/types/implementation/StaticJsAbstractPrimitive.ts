import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsPrimitive } from "../StaticJsPrimitive.js";
import type { StaticJsObjectLike } from "../index.js";

export default abstract class StaticJsAbstractPrimitive
  implements StaticJsPrimitive
{
  constructor(private readonly _realm: StaticJsRealm) {}

  get realm(): StaticJsRealm {
    return this._realm;
  }

  abstract get runtimeTypeOf(): string;

  abstract get typeOf(): string;

  abstract toJs(): unknown;

  abstract toObject(): StaticJsObjectLike;

  abstract toString(): string;

  [Symbol.toStringTag](): string {
    return `StaticJsValue ${this.runtimeTypeOf} [${this.toString()}]`;
  }
}
