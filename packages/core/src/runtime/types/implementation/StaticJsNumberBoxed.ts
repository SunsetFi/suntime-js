import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import StaticJsObjectImpl from "./StaticJsObjectImpl.js";

export default class StaticJsNumberBoxed extends StaticJsObjectImpl {
  constructor(
    realm: StaticJsRealm,
    private readonly _value: number,
  ) {
    super(realm, realm.types.prototypes.numberProto);
  }

  get value() {
    return this._value;
  }

  toStringSync(): string {
    return String(this._value);
  }

  toJsSync(): unknown {
    return new Object(this._value);
  }
}
