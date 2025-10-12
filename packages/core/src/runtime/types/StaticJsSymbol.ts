import { isStaticJsValue } from "./StaticJsValue.js";
import type { StaticJsObjectLike } from "./StaticJsObjectLike.js";

export interface StaticJsSymbol extends StaticJsObjectLike {
  readonly runtimeTypeOf: "symbol";

  readonly description: string | undefined;
}

export function isStaticJsSymbol(value: unknown): value is StaticJsSymbol {
  if (!isStaticJsValue(value)) {
    return false;
  }
  return value.runtimeTypeOf === "symbol";
}
