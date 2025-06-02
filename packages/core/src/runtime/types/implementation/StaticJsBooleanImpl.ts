import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsBoolean } from "../StaticJsBoolean.js";
import type { StaticJsObject } from "../StaticJsObject.js";

import StaticJsAbstractPrimitive from "./StaticJsAbstractPrimitive.js";
import StaticJsBooleanBoxed from "./StaticJsBooleanBoxed.js";

export default class StaticJsBooleanImpl
  extends StaticJsAbstractPrimitive
  implements StaticJsBoolean
{
  private readonly _value: boolean;

  constructor(realm: StaticJsRealm, value: boolean) {
    super(realm);
    this._value = value;
  }

  get runtimeTypeOf() {
    return "boolean" as const;
  }

  get typeOf() {
    return "boolean" as const;
  }

  get value() {
    return this._value;
  }

  toJs() {
    return this._value;
  }

  toString(): string {
    return String(this._value);
  }

  negate(): StaticJsBoolean {
    if (this._value) {
      return this.realm.types.false;
    }

    return this.realm.types.true;
  }

  toObject(): StaticJsObject {
    return new StaticJsBooleanBoxed(this.realm, this._value);
  }
}
