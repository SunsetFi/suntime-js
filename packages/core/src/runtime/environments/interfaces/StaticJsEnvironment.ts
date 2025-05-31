import { StaticJsValue } from "../../types/index.js";

export default interface StaticJsEnvironment {
  hasBinding(name: string): Promise<boolean>;

  createMutableBinding(name: string, deletable: boolean): Promise<void>;

  createImmutableBinding(name: string, strict: boolean): Promise<void>;

  initializeBinding(name: string, value: StaticJsValue): Promise<void>;

  setMutableBinding(
    name: string,
    value: StaticJsValue,
    strict: boolean,
  ): Promise<void>;

  getBindingValue(name: string, strict: boolean): Promise<StaticJsValue>;

  deleteBinding(name: string): Promise<void>;

  hasThisBinding(): Promise<boolean>;

  hasSuperBinding(): Promise<boolean>;

  withBaseObject(): Promise<StaticJsValue>;

  getThisBinding(): Promise<StaticJsValue>;

  getSuperBase(): Promise<StaticJsValue>;
}
