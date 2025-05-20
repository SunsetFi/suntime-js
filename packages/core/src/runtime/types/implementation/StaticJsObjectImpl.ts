import { StaticJsRealm } from "../../realm/interfaces/StaticJsRealm.js";

import { StaticJsNull } from "../interfaces/StaticJsNull.js";
import { StaticJsObjectLike } from "../interfaces/StaticJsObject.js";

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
