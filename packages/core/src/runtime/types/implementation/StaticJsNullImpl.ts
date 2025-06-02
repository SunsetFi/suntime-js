import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import type { StaticJsNull } from "../StaticJsNull.js";

export default class StaticJsNullImpl implements StaticJsNull {
  constructor(private readonly _realm: StaticJsRealm) {}

  get realm() {
    return this._realm;
  }

  get typeOf() {
    // Javascript is truly a wonder to behold.
    return "object" as const;
  }

  get runtimeTypeOf() {
    return "null" as const;
  }

  get value() {
    return null;
  }

  toJs() {
    return null;
  }

  toString() {
    return "null";
  }
}
