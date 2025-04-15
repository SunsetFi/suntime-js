import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";

import StaticJsObjectImpl from "./StaticJsObjectImpl.js";

export default class StaticJsBooleanBoxed extends StaticJsObjectImpl {
  constructor(
    realm: StaticJsRealm,
    private readonly _value: boolean,
  ) {
    super(realm, realm.types.prototypes.booleanProto);
  }

  toString(): string {
    return String(this._value);
  }

  toNumber(): number {
    return Number(this._value);
  }

  toBoolean(): boolean {
    return this._value;
  }

  toJs(): unknown {
    return this._value;
  }
}
