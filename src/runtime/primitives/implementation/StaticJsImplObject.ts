import typedEntries from "../../../internal/typed-entries.js";
import {
  StaticJsObject,
  StaticJsObjectPropertyDescriptor,
  StaticJsValue,
} from "../interfaces/index.js";

import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";

import StaticJsObjectBase from "./StaticJsObjectBase.js";

export default class StaticJsImplObject<
  TTypeSymbol extends StaticJsObject[typeof StaticJsTypeSymbol],
> extends StaticJsObjectBase<TTypeSymbol> {
  private readonly _properties = new Map<
    string,
    StaticJsObjectPropertyDescriptor
  >();

  constructor(
    typeSymbol: TTypeSymbol,
    properties: Record<string, StaticJsObjectPropertyDescriptor>,
  ) {
    super(typeSymbol);
    for (const [name, property] of typedEntries(properties)) {
      this._properties.set(name, property);
    }
  }

  enumerateKeys(): string[] {
    return Array.from(this._properties.keys());
  }

  getPropertyDescriptor(
    name: string,
  ): StaticJsObjectPropertyDescriptor | undefined {
    return this._properties.get(name);
  }

  protected _setWritablePropertyByValue(
    _name: string,
    _value: StaticJsValue,
  ): void {
    // Should never get here; we never use decl.value
    throw new Error("Method not implemented.");
  }

  protected _defineNewProperty(
    _name: string,
    _descriptor: StaticJsObjectPropertyDescriptor,
  ): void {
    // FIXME: Throw real error
    throw new Error("Object is not extensible.");
  }

  protected _reconfigureProperty(
    _name: string,
    _descriptor: StaticJsObjectPropertyDescriptor,
  ): void {
    // FIXME: Throw real error
    throw new Error("Object is not extensible.");
  }

  protected _deleteConfigurableProperty(_name: string): void {
    // FIXME: Throw real error
    throw new Error("Object is not extensible.");
  }
}
