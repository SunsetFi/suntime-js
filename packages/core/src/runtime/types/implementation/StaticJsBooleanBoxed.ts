import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import { StaticJsObjectImpl } from "./StaticJsObjectImpl.js";

export class StaticJsBooleanBoxed extends StaticJsObjectImpl {
  constructor(
    realm: StaticJsRealm,
    private readonly _value: boolean,
  ) {
    super(realm, realm.types.prototypes.booleanProto);
  }

  get value(): boolean {
    return this._value;
  }

  override toStringSync(): string {
    return String(this._value);
  }

  override toJsSync(): unknown {
    return new Object(this._value);
  }
}
