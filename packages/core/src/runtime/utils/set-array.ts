import hasOwnProperty from "../../internal/has-own-property.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

export default function* setArray(
  realm: StaticJsRealm,
  obj: StaticJsObjectLike,
  values: (StaticJsValue | undefined)[],
) {
  for (let i = 0; i < values.length; i++) {
    const property = String(i);
    const value = values[i];
    if (!value || !hasOwnProperty(values, i)) {
      yield* obj.deleteEvaluator(property);
    } else {
      yield* obj.setEvaluator(property, value, true);
    }
  }

  yield* obj.setEvaluator("length", realm.types.number(values.length), true);
}
