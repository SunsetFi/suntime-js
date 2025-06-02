import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import type { StaticJsUndefined } from "../StaticJsUndefined.js";

export default class StaticJsUndefinedImpl implements StaticJsUndefined {
  constructor(private readonly _realm: StaticJsRealm) {}

  get realm() {
    return this._realm;
  }

  get typeOf() {
    return "undefined" as const;
  }

  get runtimeTypeOf() {
    return "undefined" as const;
  }

  get value() {
    return undefined;
  }

  toJsSync() {
    return undefined;
  }

  toStringSync(): string {
    return "undefined";
  }
}
