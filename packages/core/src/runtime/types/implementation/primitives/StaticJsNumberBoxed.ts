import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import { StaticJsObjectImpl } from "../objects/StaticJsObjectImpl.js";

export class StaticJsNumberBoxed extends StaticJsObjectImpl {
  constructor(
    realm: StaticJsRealm,
    private readonly _value: number,
  ) {
    super(realm, realm.types.prototypes.numberProto);
  }

  get value() {
    return this._value;
  }

  override toStringSync(): string {
    return String(this._value);
  }

  override toJsSync(): unknown {
    return new Object(this._value);
  }
}
