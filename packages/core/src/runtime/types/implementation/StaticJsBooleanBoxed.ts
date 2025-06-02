import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import StaticJsObjectImpl from "./StaticJsObjectImpl.js";

export default class StaticJsBooleanBoxed extends StaticJsObjectImpl {
  constructor(
    realm: StaticJsRealm,
    private readonly _value: boolean,
  ) {
    super(realm, realm.types.prototypes.booleanProto);
  }

  get value(): boolean {
    return this._value;
  }

  toStringSync(): string {
    return String(this._value);
  }

  toJsSync(): unknown {
    return this._value;
  }
}
