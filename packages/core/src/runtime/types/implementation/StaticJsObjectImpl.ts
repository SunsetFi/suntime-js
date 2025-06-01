import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsNull } from "../StaticJsNull.js";
import type { StaticJsObjectLike } from "../StaticJsObject.js";

import StaticJsObjectLikeImpl from "./StaticJsObjectLikeImpl.js";

console.log("HELLO OBJECT IMPL", StaticJsObjectLikeImpl);
export default class StaticJsObjectImpl extends StaticJsObjectLikeImpl {
  constructor(
    realm: StaticJsRealm,
    prototype: StaticJsObjectLike | StaticJsNull | null = null,
  ) {
    super(realm, prototype);
  }

  get runtimeTypeOf() {
    return "object" as const;
  }
}
