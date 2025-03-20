import { StaticJsValue } from "./StaticJsValue.js";
export interface StaticJsObject {
  hasProperty(name: string): boolean;
  getProperty(name: string): StaticJsValue | undefined;
  getIsReadOnlyProperty(name: string): boolean;
  setProperty(name: string, value: StaticJsValue): void;
  getKeys(): string[];
}
