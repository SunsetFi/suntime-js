import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import StaticJsObjectImpl from "./StaticJsObjectImpl.js";

export default class StaticJsStringBoxed extends StaticJsObjectImpl {
  constructor(
    realm: StaticJsRealm,
    private readonly _value: string,
  ) {
    super(realm, realm.types.prototypes.stringProto);
  }

  get value(): string {
    return this._value;
  }

  toStringSync(): string {
    return this._value;
  }

  toJsSync(): unknown {
    return this._value;
  }
}
