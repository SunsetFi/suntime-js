import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsSymbol } from "../../StaticJsSymbol.js";

import { StaticJsPlainObjectImpl } from "../objects/StaticJsPlainObjectImpl.js";

export class StaticJsSymbolBoxed extends StaticJsPlainObjectImpl {
  constructor(
    realm: StaticJsRealm,
    private readonly _value: StaticJsSymbol,
  ) {
    super(realm, realm.types.prototypes.symbolProto);
  }

  get value() {
    return this._value;
  }

  override toStringSync(): string {
    return `Symbol(${this._value.description})`;
  }

  override toNative(): unknown {
    return new Object(this._value.toNative());
  }
}
