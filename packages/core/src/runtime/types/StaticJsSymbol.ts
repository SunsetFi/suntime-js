import type { StaticJsObject } from "./StaticJsObject.js";
import { StaticJsTypeCode } from "./StaticJsTypeCode.js";
import { isStaticJsValue } from "./StaticJsValue.js";

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
