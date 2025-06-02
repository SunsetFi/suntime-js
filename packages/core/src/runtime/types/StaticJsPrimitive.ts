import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

export interface StaticJsPrimitive {
  readonly realm: StaticJsRealm;

  readonly typeOf: string;
  readonly runtimeTypeOf: string;

  toJsSync(): unknown;
  toStringSync(): string;
}
