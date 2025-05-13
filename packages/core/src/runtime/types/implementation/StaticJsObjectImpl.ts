import { StaticJsRealm } from "../../realm/interfaces/index.js";
import { StaticJsNull, StaticJsObjectLike } from "../interfaces/index.js";
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
