import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsPlainObjectImpl } from "../objects/StaticJsPlainObjectImpl.js";

export class StaticJsNumberBoxed extends StaticJsPlainObjectImpl {
  constructor(
    realm: StaticJsRealm,
    private readonly _value: number,
  ) {
    super(realm, realm.intrinsics["Number.prototype"]);
  }

  get value() {
    return this._value;
  }

  override toStringSync(): string {
    return String(this._value);
  }

  override toNative(): unknown {
    return new Object(this._value);
  }
}
