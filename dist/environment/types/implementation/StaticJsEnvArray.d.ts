import { StaticJsObject, StaticJsValue } from "../interfaces/index.js";
import StaticJsTypeofSymbol from "../StaticJsTypeofSymbol.js";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
export default class StaticJsArray implements StaticJsObject<"array"> {
  private _items;
  constructor(items?: StaticJsValue[]);
  get [StaticJsTypeSymbol](): "array";
  get [StaticJsTypeofSymbol](): "object";
  get length(): number;
  toString(): string;
  toJs(): any[];
  hasProperty(name: string): boolean;
  getProperty(name: string): StaticJsValue;
  getIsReadOnlyProperty(name: string): boolean;
  setProperty(name: string, value: StaticJsValue): void;
  getKeys(): string[];
  get(index: number): StaticJsValue;
  set(index: number, value: StaticJsValue): void;
  sliceNative(start?: number, end?: number): StaticJsValue[];
}
