import type { StaticJsMarkable } from "#memory/StaticJsMarkable.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { stringSizeBytes } from "#memory/implementation/string-size.js";

import type { StaticJsObject } from "../../StaticJsObject.js";
import type { StaticJsSymbol } from "../../StaticJsSymbol.js";

import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { StaticJsOrdinaryObjectImpl } from "../objects/StaticJsOrdinaryObjectImpl.js";

// By the spec, symbols CAN be stored in WeakMap.  Except for the ones created with Symbol.for apparently.
// Despite this, TS says no for the typing.
const proxySymbolOwners = new WeakMap<object, StaticJsSymbol>();

// Kinda hackish to handle this here; would be nice to fold something into type factory to
// deal with both this and object proxies.
export function getSymbolProxyOwner(sym: unknown): StaticJsSymbol | null {
  // Gross typing switcheroo to get around TS not allowing symbols as keys in WeakMap.
  return proxySymbolOwners.get(sym as unknown as object) ?? null;
}

export class StaticJsSymbolImpl extends StaticJsOrdinaryObjectImpl implements StaticJsSymbol {
  private _description: string | undefined = undefined;
  private _nativeSymbol: symbol;

  constructor(
    realm: StaticJsRealm,
    descriptionOrSymbol: string | symbol | undefined,
    prototype?: StaticJsObject | undefined,
  ) {
    super(realm, prototype ?? realm.intrinsics["Symbol.prototype"]);
    if (typeof descriptionOrSymbol === "string") {
      this._description = descriptionOrSymbol;
      this._nativeSymbol = Symbol(descriptionOrSymbol);
      realm.memory.allocate(stringSizeBytes(descriptionOrSymbol));
    } else if (typeof descriptionOrSymbol === "symbol") {
      this._description = descriptionOrSymbol.description;
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

  override get [Symbol.toStringTag](): string {
    return "StaticJsSymbol";
  }

  get runtimeTypeOf(): "symbol" {
    return "symbol";
  }

  override get typeOf(): string {
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

  override mark(marks: Set<StaticJsMarkable>, allocate?: (size: number) => void): void {
    if (marks.has(this)) {
      return;
    }
    super.mark(marks, allocate);
    if (this._description) {
      allocate?.(stringSizeBytes(this._description));
    }
  }

  override toNative(): symbol {
    return this._nativeSymbol;
  }
}
