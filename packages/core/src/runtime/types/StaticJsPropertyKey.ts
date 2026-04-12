import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";

import { CompletionValue } from "../../evaluator/completions/CompletionValue.js";

import { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { isStaticJsString } from "./StaticJsString.js";
import { isStaticJsSymbol, type StaticJsSymbol } from "./StaticJsSymbol.js";
import { StaticJsTypeCode } from "./StaticJsTypeCode.js";
import { isStaticJsValue, StaticJsValue } from "./StaticJsValue.js";

export type StaticJsPropertyKey = string | StaticJsSymbol;

export function isStaticJsPropertyKey(value: unknown): value is StaticJsPropertyKey {
  return (
    typeof value === "string" ||
    (isStaticJsValue(value) && value.runtimeTypeCode === StaticJsTypeCode.Symbol)
  );
}

export function toStaticJsPropertyKey(value: CompletionValue): StaticJsPropertyKey {
  if (isStaticJsString(value)) {
    return value.value;
  }
  if (isStaticJsSymbol(value)) {
    return value;
  }

  throw new StaticJsEngineError("Value cannot be converted to a property key");
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
