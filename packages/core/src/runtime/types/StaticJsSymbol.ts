import { isStaticJsValue } from "./StaticJsValue.js";
import type { StaticJsObject } from "./StaticJsObject.js";
import { StaticJsTypeCode } from "./StaticJsTypeCode.js";

export interface StaticJsSymbol extends StaticJsObject {
  readonly runtimeTypeOf: "symbol";

  readonly value: symbol;

  readonly description: string | undefined;

  toNative(): symbol;
}

export function isStaticJsSymbol(value: unknown): value is StaticJsSymbol {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeCode === StaticJsTypeCode.Symbol;
}
