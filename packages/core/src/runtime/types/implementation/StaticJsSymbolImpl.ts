import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsObjectLike } from "../StaticJsObjectLike.js";

import type { StaticJsSymbol } from "../StaticJsSymbol.js";
import StaticJsTypeCode from "../StaticJsTypeCode.js";

import StaticJsObjectLikeImpl from "./StaticJsObjectLikeImpl.js";

// By the spec, symbols CAN be stored in WeakMap.  Except for the ones created with Symbol.for apparently.
// Despite this, TS says no for the typing.
const proxySymbolOwners = new WeakMap<object, StaticJsSymbol>();

// Kinda hackish to handle this here; would be nice to fold something into type factory to
// deal with both this and object proxies.
export function getSymbolProxyOwner(sym: unknown): StaticJsSymbol | null {
  // Gross typing switcheroo to get around TS not allowing symbols as keys in WeakMap.
  return proxySymbolOwners.get(sym as unknown as object) ?? null;
}

export default class StaticJsSymbolImpl extends StaticJsObjectLikeImpl implements StaticJsSymbol {
  private _description: string | undefined = undefined;
  private _nativeSymbol: symbol;

  constructor(
    realm: StaticJsRealm,
    descriptionOrSymbol: string | symbol | undefined,
    prototype?: StaticJsObjectLike | undefined,
  ) {
    super(realm, prototype ?? realm.types.prototypes.symbolProto);
    if (typeof descriptionOrSymbol === "string") {
      this._description = descriptionOrSymbol;
      this._nativeSymbol = Symbol(descriptionOrSymbol);
    } else if (typeof descriptionOrSymbol === "symbol") {
      this._nativeSymbol = descriptionOrSymbol;
    } else {
      this._nativeSymbol = Symbol();
    }

    // Symbols not in the registry can go into weak maps.
    if (!Symbol.keyFor(this._nativeSymbol)) {
      // ...But we have to do shennanigans for typescript to accept that.
      proxySymbolOwners.set(this._nativeSymbol as unknown as object, this);
    }
  }

  get runtimeTypeOf(): "symbol" {
    return "symbol";
  }

  get typeOf(): string {
    return "symbol";
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.Symbol;
  }

  get value() {
    return this._nativeSymbol;
  }

  get description(): string | undefined {
    return this._description;
  }

  toJsSync(): symbol {
    return this._nativeSymbol;
  }
}
