import { isStaticJsValue } from "./StaticJsValue.js";
import type { StaticJsObjectLike } from "./StaticJsObjectLike.js";
import StaticJsTypeCode from "./StaticJsTypeCode.js";

export interface StaticJsSymbol extends StaticJsObjectLike {
  readonly runtimeTypeOf: "symbol";

  // Here so that all scalars have a value.
  readonly value: StaticJsSymbol;

  readonly description: string | undefined;

  toJsSync(): symbol;
}

export function isStaticJsSymbol(value: unknown): value is StaticJsSymbol {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeCode === StaticJsTypeCode.Symbol;
}
