import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type StaticJsTypeCode from "./StaticJsTypeCode.js";

export interface StaticJsPrimitive {
  readonly realm: StaticJsRealm;

  readonly typeOf: string;
  readonly runtimeTypeOf: string;
  readonly runtimeTypeCode: StaticJsTypeCode;

  toJsSync(): unknown;
  toStringSync(): string;
}
