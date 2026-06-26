import type { StaticJsObject } from "./StaticJsObject.js";

import { StaticJsTypeCode } from "./StaticJsTypeCode.js";
import { isStaticJsValue } from "./StaticJsValue.js";

export interface StaticJsPlainObject extends StaticJsObject {
  readonly runtimeTypeOf: "object";
}
export function isStaticJsPlainObject(value: unknown): value is StaticJsPlainObject {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeCode === StaticJsTypeCode.PlainObject;
}
