import { StaticJsUndefined } from "../interfaces/index.js";

export default class StaticJsUndefinedImpl implements StaticJsUndefined {
  static readonly Instance = new StaticJsUndefinedImpl();

  get typeOf() {
    return "undefined" as const;
  }

  get runtimeTypeOf() {
    return "undefined";
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
}
