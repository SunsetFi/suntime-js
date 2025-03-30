import { StaticJsNull as IStaticJsNull } from "../interfaces/index.js";

export default class StaticJsEnvNull implements IStaticJsNull {
  static readonly Instance = new StaticJsEnvNull();

  get typeOf() {
    // Javascript is truly a wonder to behold.
    return "object" as const;
  }

  get runtimeTypeOf() {
    return "null";
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
