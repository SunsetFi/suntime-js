import { StaticJsUndefined as IStaticJsUndefined } from "../interfaces/index.js";

import StaticJsTypeofSymbol from "../StaticJsTypeofSymbol.js";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";

export default class StaticJsEnvUndefined implements IStaticJsUndefined {
  static readonly Instance = new StaticJsEnvUndefined();

  get [StaticJsTypeSymbol]() {
    return "undefined" as const;
  }

  get [StaticJsTypeofSymbol]() {
    return "undefined" as const;
  }

  toString(): string {
    return "undefined";
  }

  toJs() {
    return undefined;
  }
}
