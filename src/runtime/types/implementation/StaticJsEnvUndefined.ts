import { StaticJsUndefined as IStaticJsUndefined } from "../interfaces/index.js";

export default class StaticJsEnvUndefined implements IStaticJsUndefined {
  static readonly Instance = new StaticJsEnvUndefined();

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
