import { StaticJsNull as IStaticJsNull } from "../interfaces/index.js";

import StaticJsTypeofSymbol from "../StaticJsTypeofSymbol.js";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";

export default class StaticJsEnvNull implements IStaticJsNull {
  static readonly Instance = new StaticJsEnvNull();

  get [StaticJsTypeSymbol]() {
    return "null" as const;
  }

  get [StaticJsTypeofSymbol]() {
    // Javascript is truly a wonder to behold.
    return "object" as const;
  }

  toString() {
    return "null";
  }

  toJs() {
    return null;
  }
}
