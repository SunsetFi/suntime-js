import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { StaticJsTypeCode } from "./StaticJsTypeCode.js";
import { isStaticJsValue } from "./StaticJsValue.js";

export interface StaticJsPrimitive {
  readonly realm: StaticJsRealm;

  readonly typeOf: string;
  readonly runtimeTypeOf: string;
  readonly runtimeTypeCode: StaticJsTypeCode;

  toNative(): unknown;
  toStringSync(): string;
}

const primitives = new Set<StaticJsTypeCode>([
  StaticJsTypeCode.String,
  StaticJsTypeCode.Number,
  StaticJsTypeCode.Boolean,
  StaticJsTypeCode.Null,
  StaticJsTypeCode.Undefined,
  StaticJsTypeCode.Symbol,
]);

export function isStaticJsPrimitive(value: unknown): value is StaticJsPrimitive {
  if (!isStaticJsValue(value)) {
    return false;
  }

  return primitives.has(value.runtimeTypeCode);
}
