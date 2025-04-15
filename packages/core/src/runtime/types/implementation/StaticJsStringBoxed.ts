import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";

import StaticJsObjectImpl from "./StaticJsObjectImpl.js";

export default class StaticJsStringBoxed extends StaticJsObjectImpl {
  constructor(
    realm: StaticJsRealm,
    private readonly _value: string,
  ) {
    super(realm, realm.types.prototypes.stringProto);
  }

  toString(): string {
    return this._value;
  }

  toNumber(): number {
    return Number(this._value);
  }

  toBoolean(): boolean {
    return Boolean(this._value);
  }

  toJs(): unknown {
    return this._value;
  }
}
