import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsNull } from "../StaticJsNull.js";
import type { StaticJsObjectLike } from "../StaticJsObjectLike.js";
import StaticJsTypeCode from "../StaticJsTypeCode.js";

import StaticJsObjectLikeImpl from "./StaticJsObjectLikeImpl.js";

export default class StaticJsObjectImpl extends StaticJsObjectLikeImpl {
  constructor(realm: StaticJsRealm, prototype: StaticJsObjectLike | StaticJsNull | null = null) {
    super(realm, prototype);
  }

  get runtimeTypeOf() {
    return "object" as const;
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.Object;
  }
}
