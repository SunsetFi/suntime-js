import { StaticJsUndefined as IStaticJsUndefined } from "../interfaces/index.js";

import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";

export default class StaticJsEnvUndefined implements IStaticJsUndefined {
  static readonly Instance = new StaticJsEnvUndefined();

  get [StaticJsTypeSymbol]() {
    return "undefined" as const;
  }

  get typeOf() {
    return "undefined" as const;
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
