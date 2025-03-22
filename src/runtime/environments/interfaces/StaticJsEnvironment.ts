import { StaticJsValue } from "../../primitives/index.js";

export default interface StaticJsEnvironment {
  hasBinding(name: string): boolean;
  createMutableBinding(name: string, deletable: boolean): void;
  createImmutableBinding(name: string, strict: boolean): void;
  canDeclareGlobalVar(name: string): boolean;
  createGlobalVarBinding(name: string, deletable: boolean): void;
  initializeBinding(name: string, value: StaticJsValue): void;
  setMutableBinding(name: string, value: StaticJsValue, strict: boolean): void;
  getBindingValue(name: string, strict: boolean): StaticJsValue;
  deleteBinding(name: string): void;
  hasThisBinding(): boolean;
  hasSuperBinding(): boolean;
  withBaseObject(): StaticJsValue;
  getThisBinding(): StaticJsValue;
  getSuperBase(): StaticJsValue;
}
