import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import StaticJsTypeCode from "../StaticJsTypeCode.js";
import type { StaticJsUndefined } from "../StaticJsUndefined.js";

import StaticJsAbstractPrimitive from "./StaticJsAbstractPrimitive.js";

export default class StaticJsUndefinedImpl
  extends StaticJsAbstractPrimitive
  implements StaticJsUndefined
{
  constructor(realm: StaticJsRealm) {
    super(realm);
  }

  get typeOf() {
    return "undefined" as const;
  }

  get runtimeTypeOf() {
    return "undefined" as const;
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.Undefined;
  }

  get value() {
    return undefined;
  }

  toJsSync() {
    return undefined;
  }

  toStringSync(): string {
    return "undefined";
  }
}
