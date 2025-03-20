import { StaticJsValue } from "../types/StaticJsValue.js";
export default class PlainJsObject {
  private readonly _contents;
  hasProperty(name: string): boolean;
  getProperty(name: string): StaticJsValue | undefined;
  getIsReadOnlyProperty(name: string): boolean;
  setProperty(name: string, value: StaticJsValue): void;
  getKeys(): string[];
}
