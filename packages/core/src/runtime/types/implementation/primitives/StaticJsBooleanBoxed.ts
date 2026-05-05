import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsPlainObjectImpl } from "../objects/StaticJsPlainObjectImpl.js";

export class StaticJsBooleanBoxed extends StaticJsPlainObjectImpl {
  constructor(
    realm: StaticJsRealm,
    private readonly _value: boolean,
  ) {
    super(realm, realm.intrinsics["Boolean.prototype"]);
  }

  get value(): boolean {
    return this._value;
  }

  override toStringSync(): string {
    return String(this._value);
  }

  override toNative(): unknown {
    return new Object(this._value);
  }
}
