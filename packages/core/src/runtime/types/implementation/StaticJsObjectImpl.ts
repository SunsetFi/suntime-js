import { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import { StaticJsNull } from "../StaticJsNull.js";
import { StaticJsObjectLike } from "../StaticJsObject.js";

import StaticJsObjectLikeImpl from "./StaticJsObjectLikeImpl.js";

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
