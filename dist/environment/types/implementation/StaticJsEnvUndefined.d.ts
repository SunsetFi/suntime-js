import { StaticJsUndefined as IStaticJsUndefined } from "../interfaces/index.js";
import StaticJsTypeofSymbol from "../StaticJsTypeofSymbol.js";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
export default class StaticJsEnvUndefined implements IStaticJsUndefined {
  static readonly Instance: StaticJsEnvUndefined;
  get [StaticJsTypeSymbol](): "undefined";
  get [StaticJsTypeofSymbol](): "undefined";
  toString(): string;
  toJs(): undefined;
}
