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

  toString(): string {
    return String(this._value);
  }

  toJs(): unknown {
    return this._value;
  }
}
