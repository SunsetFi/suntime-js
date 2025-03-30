import {
  StaticJsValue,
  StaticJsObjectPropertyDescriptor,
  StaticJsObject,
} from "../interfaces/index.js";

import StaticJsAbstractObject from "./StaticJsAbstractObject.js";

export default class StaticJsEnvObject extends StaticJsAbstractObject {
  private readonly _contents = new Map<
    string,
    StaticJsObjectPropertyDescriptor
  >();

  constructor(
    prototype: StaticJsObject | null = null,
    type: string = "object",
  ) {
    super(prototype, type);
  }

  getOwnKeys(): string[] {
    return Array.from(this._contents.keys());
  }

  getOwnPropertyDescriptor(
    name: string,
  ): StaticJsObjectPropertyDescriptor | undefined {
    return this._contents.get(name);
  }

  deleteProperty(name: string): boolean {
    if (!this.extensible) {
      return false;
    }

    const decl = this._contents.get(name);
    if (!decl || !decl.configurable) {
      return false;
    }

    return this._contents.delete(name);
  }

  protected _setWritableDataProperty(name: string, value: StaticJsValue): void {
    this._contents.set(name, {
      ...this._contents.get(name),
      value,
    });
  }

  protected _defineProperty(
    name: string,
    descriptor: StaticJsObjectPropertyDescriptor,
  ): void {
    this._contents.set(name, {
      ...this._contents.get(name),
      ...descriptor,
    });
  }

  protected _deleteConfigurableProperty(name: string): void {
    this._contents.delete(name);
  }
}
