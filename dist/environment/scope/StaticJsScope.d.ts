import { StaticJsValue } from "../types/index.js";
export default class StaticJsScope {
  private readonly _parent;
  private readonly _properties;
  constructor(_parent?: StaticJsScope | null);
  hasProperty(name: string): boolean;
  getProperty(name: string): StaticJsValue;
  declareConstProperty(name: string, value: StaticJsValue): void;
  declareLetProperty(name: string, value: StaticJsValue): void;
  setProperty(name: string, value: StaticJsValue): void;
}
