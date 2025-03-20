import { StaticJsBoolean as IStaticJsBoolean } from "../interfaces/index.js";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
import StaticJsTypeofSymbol from "../StaticJsTypeofSymbol.js";
export default class StaticJsEnvBoolean implements IStaticJsBoolean {
  private readonly _value;
  constructor(value: boolean);
  get [StaticJsTypeSymbol](): "boolean";
  get [StaticJsTypeofSymbol](): "boolean";
  toString(): string;
  toJs(): boolean;
  get value(): boolean;
}
