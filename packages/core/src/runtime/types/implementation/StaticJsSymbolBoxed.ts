import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsSymbol } from "../StaticJsSymbol.js";

import StaticJsObjectImpl from "./StaticJsObjectImpl.js";

export default class StaticJsSymbolBoxed extends StaticJsObjectImpl {
  constructor(
    realm: StaticJsRealm,
    private readonly _value: StaticJsSymbol,
  ) {
    super(realm, realm.types.prototypes.symbolProto);
  }

  get value() {
    return this._value;
  }

  toStringSync(): string {
    return `Symbol(${this._value.description})`;
  }

  toJsSync(): unknown {
    return new Object(this._value.toJsSync());
  }
}
