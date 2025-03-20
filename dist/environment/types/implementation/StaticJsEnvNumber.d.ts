import { StaticJsNumber as IStaticJsNumber } from "../interfaces/index.js";
import StaticJsTypeofSymbol from "../StaticJsTypeofSymbol.js";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
export default class StaticJsEnvNumber implements IStaticJsNumber {
  private readonly _value;
  constructor(value: number);
  get [StaticJsTypeSymbol](): "number";
  get [StaticJsTypeofSymbol](): "number";
  toString(): string;
  toJs(): number;
  get value(): number;
}
