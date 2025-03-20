import { StaticJsNull as IStaticJsNull } from "../interfaces/index.js";
import StaticJsTypeofSymbol from "../StaticJsTypeofSymbol.js";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
export default class StaticJsEnvNull implements IStaticJsNull {
  static readonly Instance: StaticJsEnvNull;
  get [StaticJsTypeSymbol](): "null";
  get [StaticJsTypeofSymbol](): "object";
  toString(): string;
  toJs(): null;
}
