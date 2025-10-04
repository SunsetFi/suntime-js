import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsSymbol } from "../StaticJsSymbol.js";

import StaticJsObjectLikeImpl from "./StaticJsObjectLikeImpl.js";

// By the spec, symbols CAN be stored in WeakMap.  Except for the ones creatd with Symbol.for apparently.
// Despite this, TS says no for the typing.
const proxySymbolOwners = new WeakMap<object, StaticJsSymbol>();

// Kinda hackish to handle this here; would be nice to fold something into type factory to
// deal with both this and object proxies.
export function getSymbolProxyOwner(sym: unknown): StaticJsSymbol | null {
  // Gross typing switcheroo to get around TS not allowing symbols as keys in WeakMap.
  return proxySymbolOwners.get(sym as unknown as object) ?? null;
}

export default class StaticJsSymbolImpl
  extends StaticJsObjectLikeImpl
  implements StaticJsSymbol
{
  private _description: string | undefined = undefined;
  private _nativeSymbol: symbol | null = null;

  constructor(
    realm: StaticJsRealm,
    descriptionOrSymbol: string | symbol | undefined,
  ) {
    super(realm, realm.types.prototypes.symbolProto);
    if (typeof descriptionOrSymbol === "string") {
      this._description = descriptionOrSymbol;
    } else if (typeof descriptionOrSymbol === "symbol") {
      this._nativeSymbol = descriptionOrSymbol;
    }
  }

  get runtimeTypeOf(): "symbol" {
    return "symbol";
  }

  get typeOf(): string {
    return "symbol";
  }

  get description(): string | undefined {
    return this._description;
  }

  toJsSync(): unknown {
    if (this._nativeSymbol === null) {
      this._nativeSymbol = Symbol(this.description);
      // Gross typing switcheroo to get around TS not allowing symbols as keys in WeakMap.
      proxySymbolOwners.set(this._nativeSymbol as unknown as object, this);
    }
    return this._nativeSymbol;
  }
}
