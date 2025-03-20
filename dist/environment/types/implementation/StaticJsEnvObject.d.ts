import { StaticJsObject, StaticJsValue } from "../interfaces/index.js";
import StaticJsTypeofSymbol from "../StaticJsTypeofSymbol.js";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
export default class StaticJsEnvObject implements StaticJsObject {
  private readonly _contents;
  get [StaticJsTypeSymbol](): "object";
  get [StaticJsTypeofSymbol](): "object";
  toString(): string;
  toJs(): Record<string, unknown>;
  hasProperty(name: string): boolean;
  getProperty(name: string): StaticJsValue;
  getIsReadOnlyProperty(name: string): boolean;
  setProperty(name: string, value: StaticJsValue): void;
  getKeys(): string[];
}
