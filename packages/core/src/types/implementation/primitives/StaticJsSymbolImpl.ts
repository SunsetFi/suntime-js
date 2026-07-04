import type { StaticJsAllocation, StaticJsAllocator } from "#memory/StaticJsAllocation.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { allocated } from "#memory/allocated.js";
import { StaticJsMemoryAllocationTag } from "#memory/StaticJsMemoryAllocationTag.js";

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

  static create(
    realm: StaticJsRealm,
    descriptionOrSymbol: string | symbol | undefined,
    prototype?: StaticJsObject | undefined,
  ): StaticJsSymbolImpl {
    return allocated(new StaticJsSymbolImpl(realm, descriptionOrSymbol, prototype));
  }

  protected constructor(
    realm: StaticJsRealm,
    descriptionOrSymbol: string | symbol | undefined,
    prototype?: StaticJsObject | undefined,
  ) {
    super(realm, prototype ?? realm.intrinsics["Symbol.prototype"]);
    if (typeof descriptionOrSymbol === "string") {
      this._description = descriptionOrSymbol;
      this._nativeSymbol = Symbol(descriptionOrSymbol);
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

    // TODO: If we created our own symbol, we should track that allocation.
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

  override mark(marks: Set<StaticJsAllocation>): void {
    if (marks.has(this)) {
      return;
    }
    super.mark(marks);
  }

  override allocateSelf(
    allocate: StaticJsAllocator = this.realm.memory.allocate.bind(this.realm.memory),
  ): void {
    super.allocateSelf(allocate);
    if (this._description) {
      allocate(StaticJsMemoryAllocationTag.RawString, this._description);
    }
  }

  override toNative(): symbol {
    return this._nativeSymbol;
  }
}
