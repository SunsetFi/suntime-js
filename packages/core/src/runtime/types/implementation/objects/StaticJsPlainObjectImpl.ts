import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsNull } from "../../StaticJsNull.js";
import type { StaticJsObject } from "../../StaticJsObject.js";

import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { StaticJsOrdinaryObjectImpl } from "./StaticJsOrdinaryObjectImpl.js";

export class StaticJsPlainObjectImpl extends StaticJsOrdinaryObjectImpl {
  constructor(realm: StaticJsRealm, prototype: StaticJsObject | StaticJsNull | null = null) {
    super(realm, prototype);
  }

  get runtimeTypeOf() {
    return "object" as const;
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.PlainObject;
  }
}
