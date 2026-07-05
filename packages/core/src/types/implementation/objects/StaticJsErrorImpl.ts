import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { allocated } from "#memory/allocated.js";

import type { StaticJsError } from "../../StaticJsError.js";
import type { StaticJsObject } from "../../StaticJsObject.js";
import type { StaticJsAbstractObjectCreateParams } from "../StaticJsAbstractObject.js";

import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { StaticJsOrdinaryObjectImpl } from "./StaticJsOrdinaryObjectImpl.js";

export interface StaticJsErrorImplCreateParams extends StaticJsAbstractObjectCreateParams {
  prototype?: StaticJsObject | undefined;
}

export class StaticJsErrorImpl extends StaticJsOrdinaryObjectImpl implements StaticJsError {
  static create(params: StaticJsErrorImplCreateParams): StaticJsErrorImpl {
    const { realm, prototype = realm.intrinsics["Error.prototype"] } = params;
    return allocated(new StaticJsErrorImpl(realm, prototype));
  }

  protected constructor(
    realm: StaticJsRealm,
    prototype: StaticJsObject = realm.intrinsics["Error.prototype"],
  ) {
    super(realm, prototype);
  }

  override get [Symbol.toStringTag](): string {
    return "StaticJsError";
  }

  override get runtimeTypeOf(): "error" {
    return "error";
  }

  override get runtimeTypeCode() {
    return StaticJsTypeCode.Error;
  }
}
