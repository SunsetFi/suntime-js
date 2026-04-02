import { StaticJsRealm } from "../realm/StaticJsRealm.js";
import type { StaticJsSymbol } from "./StaticJsSymbol.js";
import { StaticJsTypeCode } from "./StaticJsTypeCode.js";
import { isStaticJsValue, StaticJsValue } from "./StaticJsValue.js";

export type StaticJsPropertyKey = string | StaticJsSymbol;

export function isStaticJsPropertyKey(value: unknown): value is StaticJsPropertyKey {
  return (
    typeof value === "string" ||
    (isStaticJsValue(value) && value.runtimeTypeCode === StaticJsTypeCode.Symbol)
  );
}

export function staticJsPropertyKeyToValue(
  key: StaticJsPropertyKey,
  realm: StaticJsRealm,
): StaticJsValue {
  if (typeof key === "string") {
    return realm.types.string(key);
  }

  return key;
}
