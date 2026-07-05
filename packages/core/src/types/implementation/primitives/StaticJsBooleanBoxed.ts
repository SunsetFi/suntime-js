import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { allocated } from "#memory/allocated.js";

import {
  StaticJsPlainObjectImpl,
  type StaticJsPlainObjectImplCreateParams,
} from "../objects/StaticJsPlainObjectImpl.js";

export interface StaticJsBooleanBoxedCreateParams extends StaticJsPlainObjectImplCreateParams {
  value: boolean;
}

export class StaticJsBooleanBoxed extends StaticJsPlainObjectImpl {
  static override create(params: StaticJsBooleanBoxedCreateParams): StaticJsBooleanBoxed {
    return allocated(new StaticJsBooleanBoxed(params.realm, params.value));
  }

  protected constructor(
    realm: StaticJsRealm,
    private readonly _value: boolean,
  ) {
    super(realm, realm.intrinsics["Boolean.prototype"]);
  }

  override get [Symbol.toStringTag](): string {
    return "StaticJsBooleanBoxed";
  }

  get value(): boolean {
    return this._value;
  }

  override toStringSync(): string {
    return String(this._value);
  }

  override toNative() {
    return new Object(this._value);
  }
}
