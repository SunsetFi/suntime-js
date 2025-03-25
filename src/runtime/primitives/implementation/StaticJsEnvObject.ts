import {
  StaticJsValue,
  StaticJsObjectPropertyDescriptor,
} from "../interfaces/index.js";

import StaticJsObjectBase from "./StaticJsObjectBase.js";

export default class StaticJsEnvObject extends StaticJsObjectBase<"object"> {
  private readonly _contents = new Map<
    string,
    StaticJsObjectPropertyDescriptor
  >();

  constructor() {
    super("object");
  }

  enumerateKeys(): string[] {
    return Array.from(this._contents.keys());
  }

  getPropertyDescriptor(
    name: string,
  ): StaticJsObjectPropertyDescriptor | undefined {
    return this._contents.get(name);
  }

  deleteProperty(name: string): boolean {
    return this._contents.delete(name);
  }

  protected _setWritablePropertyByValue(
    name: string,
    value: StaticJsValue,
  ): void {
    this._contents.set(name, {
      ...this._contents.get(name),
      value,
    });
  }

  protected _defineNewProperty(
    name: string,
    descriptor: StaticJsObjectPropertyDescriptor,
  ): void {
    this._contents.set(name, descriptor);
  }

  protected _reconfigureProperty(
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
