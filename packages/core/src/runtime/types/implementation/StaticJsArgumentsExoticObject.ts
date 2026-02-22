import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import StaticJsTypeCode from "../StaticJsTypeCode.js";
import type { StaticJsObjectLike } from "../StaticJsObjectLike.js";

import StaticJsObjectLikeImpl from "./StaticJsObjectLikeImpl.js";

export default class StaticJsArgumentsExoticObject extends StaticJsObjectLikeImpl {
  constructor(
    parameterMap: StaticJsObjectLike | undefined,
    realm: StaticJsRealm,
  ) {
    super(realm);
  }

  get runtimeTypeOf(): string {
    return "object";
  }

  get runtimeTypeCode(): StaticJsTypeCode {
    return StaticJsTypeCode.Object;
  }
}
