import { StaticJsObject } from "../interfaces/StaticJsObject.js";
import { StaticJsValue } from "../interfaces/StaticJsValue.js";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
import StaticJsTypeofSymbol from "../StaticJsTypeofSymbol.js";
export interface StaticJsRuntimeObjectValue {
  get?(): StaticJsValue;
  set?(value: StaticJsValue): void;
}
export default class StaticJsRuntimeObject implements StaticJsObject {
  private readonly _mutationTarget;
  private readonly _properties;
  constructor(
    properties: Record<string, StaticJsRuntimeObjectValue>,
    mutationTarget?: StaticJsObject,
  );
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
