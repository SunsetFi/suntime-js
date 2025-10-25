import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { isStaticJsObjectLike } from "../types/StaticJsObjectLike.js";

export default function toRuntimeWrap(
  value: unknown,
  realm: StaticJsRealm,
): StaticJsValue {
  if (value === null) {
    return realm.types.null;
  }

  if (value === undefined) {
    return realm.types.undefined;
  }
  switch (typeof value) {
    case "boolean":
      return realm.types.boolean(value);
    case "number":
      return realm.types.number(value);
    case "string":
      return realm.types.string(value);
    case "symbol":
      return realm.types.toStaticJsValue(value);
  }

  if (isStaticJsObjectLike(value)) {
    return value;
  }

  throw new StaticJsEngineError(
    `Cannot wrap native value into runtime value: ${String(value)}`,
  );
}
