import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import type { StaticJsNull } from "../StaticJsNull.js";
import StaticJsTypeCode from "../StaticJsTypeCode.js";

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

  get runtimeTypeCode() {
    return StaticJsTypeCode.Null;
  }

  get value() {
    return null;
  }

  toJsSync() {
    return null;
  }

  toStringSync() {
    return "null";
  }
}
