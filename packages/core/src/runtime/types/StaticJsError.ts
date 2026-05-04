import { StaticJsObject } from "./StaticJsObject.js";
import { StaticJsTypeCode } from "./StaticJsTypeCode.js";
import { isStaticJsValue } from "./StaticJsValue.js";

export interface StaticJsError extends StaticJsObject {
  runtimeTypeOf: "error";
}

export function isStaticJsError(value: StaticJsObject): value is StaticJsError {
  if (!isStaticJsValue(value)) {
    return false;
  }

  return value.runtimeTypeCode === StaticJsTypeCode.Error;
}
