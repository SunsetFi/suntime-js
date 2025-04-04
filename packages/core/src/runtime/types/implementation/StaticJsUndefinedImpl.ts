import { StaticJsUndefined } from "../interfaces/StaticJsUndefined.js";
import { StaticJsObject } from "../interfaces/StaticJsObject.js";

export default class StaticJsUndefinedImpl implements StaticJsUndefined {
  static readonly Instance = new StaticJsUndefinedImpl();

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
