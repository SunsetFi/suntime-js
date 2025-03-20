import { StaticJsObject } from "../types/StaticJsObject.js";
import { StaticJsValue } from "../types/StaticJsValue.js";
export interface RuntimeJsValue {
  get?(): StaticJsValue;
  set?(value: StaticJsValue): void;
}
export default class RuntimeJSObject implements StaticJsObject {
  private readonly _mutationTarget;
  private readonly _properties;
  constructor(
    properties: Record<string, RuntimeJsValue>,
    mutationTarget?: StaticJsObject,
  );
  hasProperty(name: string): boolean;
  getProperty(name: string): StaticJsValue | undefined;
  getIsReadOnlyProperty(name: string): boolean;
  setProperty(name: string, value: StaticJsValue): void;
  getKeys(): string[];
}
