import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import type { StaticJsUndefined } from "../StaticJsUndefined.js";
import type { StaticJsObject } from "../StaticJsObject.js";

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

  toJs() {
    return undefined;
  }

  toString(): string {
    return "undefined";
  }

  toNumber(): number {
    return Number.NaN;
  }

  toBoolean(): boolean {
    return false;
  }

  toObject(): StaticJsObject {
    // TODO: Throw real error
    throw new Error("TypeError: Cannot convert undefined to object");
  }
}
