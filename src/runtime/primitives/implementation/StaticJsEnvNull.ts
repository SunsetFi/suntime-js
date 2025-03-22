import { StaticJsNull as IStaticJsNull } from "../interfaces/index.js";

import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";

export default class StaticJsEnvNull implements IStaticJsNull {
  static readonly Instance = new StaticJsEnvNull();

  get [StaticJsTypeSymbol]() {
    return "null" as const;
  }

  get typeOf() {
    // Javascript is truly a wonder to behold.
    return "object" as const;
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
}
