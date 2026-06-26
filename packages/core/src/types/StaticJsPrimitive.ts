import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsToNativeOpts } from "./StaticJsToNativeOpts.js";
import { StaticJsTypeCode } from "./StaticJsTypeCode.js";

export interface StaticJsPrimitive {
  readonly realm: StaticJsRealm;

  readonly typeOf: string;
  readonly runtimeTypeOf: string;
  readonly runtimeTypeCode: StaticJsTypeCode;

  toNative(opts?: StaticJsToNativeOpts): unknown;
  toStringSync(): string;
}
