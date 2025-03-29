import typedEntries from "../../../internal/typed-entries.js";
import {
  StaticJsObject,
  StaticJsObjectPropertyDescriptor,
  StaticJsValue,
} from "../interfaces/index.js";

import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";

import StaticJsAbstractObject from "./StaticJsAbstractObject.js";

export default class StaticJsImplObject<
  TTypeSymbol extends StaticJsObject[typeof StaticJsTypeSymbol],
> extends StaticJsAbstractObject<TTypeSymbol> {
  private readonly _properties = new Map<
    string,
    StaticJsObjectPropertyDescriptor
  >();

  constructor(
    typeSymbol: TTypeSymbol,
    properties: Record<string, StaticJsObjectPropertyDescriptor>,
    prototype: StaticJsObject | null = null,
  ) {
    super(typeSymbol, prototype);
    for (const [name, property] of typedEntries(properties)) {
      this._properties.set(name, property);
    }
  }

  getOwnKeys(): string[] {
    return Array.from(this._properties.keys());
  }

  getOwnPropertyDescriptor(
    name: string,
  ): StaticJsObjectPropertyDescriptor | undefined {
    return this._properties.get(name);
  }

  protected _setWritableDataProperty(
    _name: string,
    _value: StaticJsValue,
  ): void {
    // Should never get here; we never use decl.value
    throw new Error("Method not implemented.");
  }

  protected _defineProperty(
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
