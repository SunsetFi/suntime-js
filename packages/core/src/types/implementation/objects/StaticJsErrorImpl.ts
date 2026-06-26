import type { StaticJsRealm } from "../../../runtime/realm/StaticJsRealm.js";
import type { StaticJsError } from "../../StaticJsError.js";
import type { StaticJsObject } from "../../StaticJsObject.js";
import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";

import { StaticJsOrdinaryObjectImpl } from "./StaticJsOrdinaryObjectImpl.js";

export class StaticJsErrorImpl extends StaticJsOrdinaryObjectImpl implements StaticJsError {
  constructor(
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
