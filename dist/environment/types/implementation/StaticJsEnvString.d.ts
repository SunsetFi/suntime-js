import { StaticJsString, StaticJsValue } from "../interfaces/index.js";
import StaticJsTypeofSymbol from "../StaticJsTypeofSymbol.js";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
export default class StaticJsEnvString implements StaticJsString {
  private readonly _value;
  constructor(value: string);
  get [StaticJsTypeSymbol](): "string";
  get [StaticJsTypeofSymbol](): "string";
  toString(): string;
  toJs(): string;
  hasProperty(name: string): boolean;
  getProperty(name: string): StaticJsValue;
  getIsReadOnlyProperty(name: string): boolean;
  setProperty(name: string, value: StaticJsValue): void;
  getKeys(): string[];
}
