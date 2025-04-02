import { StaticJsNull, StaticJsObject } from "../interfaces/index.js";

export default class StaticJsNullImpl implements StaticJsNull {
  static readonly Instance = new StaticJsNullImpl();

  get typeOf() {
    // Javascript is truly a wonder to behold.
    return "object" as const;
  }

  get runtimeTypeOf() {
    return "null" as const;
  }

  toJs() {
    return null;
  }

  toString() {
    return "null";
  }

  toNumber(): number {
    return 0;
  }

  toBoolean(): boolean {
    return false;
  }

  toObject(): StaticJsObject {
    // TODO: Throw real error
    throw new Error("TypeError: Cannot convert undefined to object");
  }
}
