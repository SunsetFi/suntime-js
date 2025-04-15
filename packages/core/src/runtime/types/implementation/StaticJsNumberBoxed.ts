import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";

import StaticJsObjectImpl from "./StaticJsObjectImpl.js";

export default class StaticJsNumberBoxed extends StaticJsObjectImpl {
  constructor(
    realm: StaticJsRealm,
    private readonly _value: number,
  ) {
    super(realm, realm.types.prototypes.numberProto);
  }

  toString(): string {
    return String(this._value);
  }

  toNumber(): number {
    return this._value;
  }

  toBoolean(): boolean {
    return Boolean(this._value);
  }

  toJs(): unknown {
    return this._value;
  }
}
