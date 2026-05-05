import { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsError } from "../../StaticJsError.js";
import { StaticJsObject } from "../../StaticJsObject.js";
import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";

import { StaticJsOrdinaryObjectImpl } from "./StaticJsOrdinaryObjectImpl.js";

export class StaticJsErrorImpl extends StaticJsOrdinaryObjectImpl implements StaticJsError {
  constructor(
    realm: StaticJsRealm,
    prototype: StaticJsObject = realm.intrinsics["Error.prototype"],
  ) {
    super(realm, prototype);
  }

  override get runtimeTypeOf(): "error" {
    return "error";
  }

  override get runtimeTypeCode() {
    return StaticJsTypeCode.Error;
  }
}
