import { isStaticJsValue } from "./StaticJsValue.js";
import type { StaticJsObjectLike } from "./StaticJsObjectLike.js";
import StaticJsTypeCode from "./StaticJsTypeCode.js";

export interface StaticJsSymbol extends StaticJsObjectLike {
  readonly runtimeTypeOf: "symbol";

  readonly value: symbol;

  readonly description: string | undefined;

  toJsSync(): symbol;
}

export function isStaticJsSymbol(value: unknown): value is StaticJsSymbol {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeCode === StaticJsTypeCode.Symbol;
}
