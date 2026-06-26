import type { StaticJsRealm } from "../../../runtime/realm/StaticJsRealm.js";
import { StaticJsPlainObjectImpl } from "../objects/StaticJsPlainObjectImpl.js";

export class StaticJsBooleanBoxed extends StaticJsPlainObjectImpl {
  constructor(
    realm: StaticJsRealm,
    private readonly _value: boolean,
  ) {
    super(realm, realm.intrinsics["Boolean.prototype"]);
  }

  override get [Symbol.toStringTag](): string {
    return "StaticJsBooleanBoxed";
  }

  get value(): boolean {
    return this._value;
  }

  override toStringSync(): string {
    return String(this._value);
  }

  override toNative() {
    return new Object(this._value);
  }
}
