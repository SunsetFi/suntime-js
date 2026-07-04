import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { allocated } from "#memory/allocated.js";

import type { StaticJsSymbol } from "../../StaticJsSymbol.js";

import {
  StaticJsPlainObjectImpl,
  type StaticJsPlainObjectImplCreateParams,
} from "../objects/StaticJsPlainObjectImpl.js";

export interface StaticJsSymbolBoxedCreateParams extends StaticJsPlainObjectImplCreateParams {
  value: StaticJsSymbol;
}

export class StaticJsSymbolBoxed extends StaticJsPlainObjectImpl {
  static override create(params: StaticJsSymbolBoxedCreateParams): StaticJsSymbolBoxed {
    return allocated(new StaticJsSymbolBoxed(params.realm, params.value));
  }

  protected constructor(
    realm: StaticJsRealm,
    private readonly _value: StaticJsSymbol,
  ) {
    super(realm, realm.intrinsics["Symbol.prototype"]);
  }

  override get [Symbol.toStringTag](): string {
    return "StaticJsSymbolBoxed";
  }

  get value() {
    return this._value;
  }

  override toStringSync(): string {
    return `Symbol(${this._value.description})`;
  }

  override toNative() {
    return new Object(this._value.toNative());
  }
}
